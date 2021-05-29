import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { ProductDescription } from '../../src/components/organisms/product-description/product-description'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'

export default function ItemById({}) {
  return (
    <PageLayout>
      <Breadcrumb />
      <ProductDescription />
    </PageLayout>
  )
}
