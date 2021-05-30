import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { ProductDescription } from '../../src/components/organisms/product-description/product-description'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'

export default function ItemById({ item }) {
  const categories = item.path_from_root
  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      <ProductDescription {...{ item }} />
    </PageLayout>
  )
}

export async function getServerSideProps(ctx) {
  // Fetch data from API on SSR

  try {
    const { item } = await fetch(
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
