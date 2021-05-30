import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'
import { UISearchResult } from '../../src/components/organisms/ui-search-result/ui-search-result'

import { GetServerSideProps } from 'next'
import { ICategory, IItem } from '../../src/interfaces/IInternalSearchResponse'
import { SkeletonCard } from '../../src/components/molecules/skeleton-card/skeleton-card'

type Props = {
  items: IItem[]
  categories: ICategory[]
}

export default function ItemsSearchs({ items, categories }: Props) {
  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      {/* Skeleton Null Safe */}
      {items && items.length > 0 ? (
        <UISearchResult {...{ items }} />
      ) : (
        <SkeletonCard />
      )}
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch data from API on SSR
  try {
    const { items, categories } = await fetch(
      process.env.API_URL + `/items?q=${ctx.query.search}`
    ).then((res) => res.json())

    // Pass data to the page via props
    return {
      props: {
        items,
        categories,
      },
    }
  } catch (error) {
    // TODO: add 404 page
    return { props: {} }
  }
}
