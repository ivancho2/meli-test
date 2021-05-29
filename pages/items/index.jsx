import React from 'react'
import { PageLayout } from '../../src/components/templates/page-layout/page-layout'
import { Breadcrumb } from '../../src/components/molecules/breadcrumb/breadcrumb'
import { UISearchResult } from '../../src/components/organisms/ui-search-result/ui-search-result'

export default function ItemsSearchs({ items, categories }) {
  // TODO: implement skelethon elements

  return (
    <PageLayout>
      <Breadcrumb {...{ categories }} />
      <UISearchResult {...{ items }} />
    </PageLayout>
  )
}

export async function getServerSideProps() {
  // Pass data to the page via props
  return {
    props: {
      items: [
        {
          id: 'MLA000000',
          title: 'Menus Antiguos  Originales Sin Envio',
          price: {
            currency: 'ARS',
            amount: 450,
            decimals: 0,
          },
          picture:
            'http://http2.mlstatic.com/D_7468-MLA5221795489_102013-I.jpg',
          condition: 'used',
          free_shipping: false,
          seller_address: {
            state: {
              id: 'AR-C',
              name: 'Capital Federal',
            },
          },
        },
        {
          id: 'MLA00001',
          title: 'Menus Antiguos Originales Con Envio',
          price: {
            currency: 'ARS',
            amount: 450,
            decimals: 0,
          },
          picture:
            'http://http2.mlstatic.com/D_7468-MLA5221795489_102013-I.jpg',
          condition: 'used',
          free_shipping: true,
          seller_address: {
            state: {
              id: 'AR-C',
              name: 'Capital Federal',
            },
          },
        },
      ],
      categories: [
        {
          name: 'Arte, Librería y Mercería',
          id: 'MLA1368',
        },
        {
          name: 'Librería',
          id: 'MLA5982',
        },
        {
          name: 'Papelería',
          id: 'MLA2136',
        },
        {
          name: 'Otros',
          id: 'MLA30766',
        },
      ],
    },
  }
}
