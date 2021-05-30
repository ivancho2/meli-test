import React from 'react'
import { PageLayout } from '../src/components/templates/page-layout/page-layout'
import { SkeletonCard } from '../src/components/molecules/skeleton-card/skeleton-card'

export default function Home() {
  return (
    <PageLayout>
      <SkeletonCard />
    </PageLayout>
  )
}
