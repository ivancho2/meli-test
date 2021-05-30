import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { ProductDescription } from '../../src/components/organisms/product-description/product-description'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'
import { GetServerSideProps } from 'next'
import { Item } from '../../src/interfaces/IInternalItemResponse'

type Props = {
  item: Item
}

export default function ItemById(props: Props) {
  const {
    item,
    item: { path_from_root: categories },
  } = props

  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      <ProductDescription {...{ item }} />
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch data from API on SSR
  try {
    const { item }: { item: Item[] } = await fetch(
      process.env.API_URL + `/items/${ctx.query.id}`
    ).then((res) => res.json())

    // Pass data to the page via props
    return {
      props: {
        item,
      },
    }
  } catch (error) {
    // TODO: add 404 page
    return { props: {} }
  }
}
