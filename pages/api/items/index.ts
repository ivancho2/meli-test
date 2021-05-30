// TODO: refactor this component

import { NextApiRequest, NextApiResponse } from 'next'
import * as meliEndPoints from '../../../src/common/meli-endponts'
import {
  ISearchResponse,
  Result,
} from '../../../src/interfaces/ISearchResponse'
import { SIGNATURE_AUTHOR } from './../../../src/constants/author-signature'
import { ITEMS_LIMIT } from '../../../src/constants/pagination'
import {
  IInternalSearchResponse,
  IItem,
} from '../../../src/interfaces/IInternalSearchResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const searchResponse: IInternalSearchResponse = await fetch(
      `${meliEndPoints.SEARCH_ITEMS}?q=${req.query.q}&limit=${ITEMS_LIMIT}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res: ISearchResponse) => {
        return processResponse(res)
      })

    res.status(200).json(searchResponse)
  } catch (error) {
    res.status(500).send('Server Error Response')
  }
}

async function processResponse(searchResponse: ISearchResponse) {
  const { categoryHistogram, items } = mapItems(searchResponse.results)
  const topCategory = pickTopCategory(categoryHistogram)
  const categories = await getCategoriesPathFromRoot(topCategory)

  return {
    author: SIGNATURE_AUTHOR,
    categories,
    items,
  }
}

type ItemsReduce = {
  items: IItem[]
  categoryHistogram: any
}

function mapItems(items: Result[]): ItemsReduce {
  const itemsReduce: ItemsReduce = items.reduce(
    (prev: ItemsReduce, current: Result) => {
      const data: IItem = {
        id: current.id,
        title: current.title,
        price: {
          currency: current.prices.presentation.display_currency,
          amount: current.price,
          decimals: 0, // TODO: find
        },
        picture: current.thumbnail,
        condition: current.condition,
        free_shipping: current.shipping.free_shipping,
        seller_address: current.seller_address.state.name,
      }

      if (!prev) {
        return {
          items: [data],
          categoryHistogram: { [current.category_id]: 1 },
        }
      }
      return {
        items: [...prev.items, data],
        categoryHistogram: {
          ...prev.categoryHistogram,
          [current.category_id]:
            (prev.categoryHistogram[current.category_id] || 0) + 1,
        },
      }
    },
    undefined
  )

  return itemsReduce
}

function pickTopCategory(categoryHistogram: any) {
  return Object.keys(categoryHistogram).reduce((prev, current) => {
    if (!prev) {
      return current
    }
    return categoryHistogram[prev] >= categoryHistogram[current]
      ? prev
      : current
  })
}

async function getCategoriesPathFromRoot(categoryId: string) {
  let slugCategoryRes = await fetch(
    `${meliEndPoints.CATEGORIES}/${categoryId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
  const pathFromRoot = slugCategoryRes.path_from_root.map((category) => ({
    name: category.name,
    id: category.id,
  }))
  return pathFromRoot
}
