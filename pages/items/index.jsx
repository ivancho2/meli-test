import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'
import { UISearchResult } from '../../src/components/organisms/ui-search-result/ui-search-result'

export default function ItemsSearchs({ items, categories }) {
  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      <UISearchResult {...{ items }} />
    </PageLayout>
  )
}

export async function getServerSideProps(ctx) {
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
