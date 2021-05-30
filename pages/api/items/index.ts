import { NextApiRequest, NextApiResponse } from 'next'

// INTERFACES
import {
  ISearchResponse,
  Result,
} from '../../../src/interfaces/ISearchResponse'
import * as MeliEndPoints from '../../../src/common/meli-endponts'
import {
  ICategory,
  IInternalSearchResponse,
  IItem,
} from '../../../src/interfaces/IInternalSearchResponse'

// CONSTANTS
import { SIGNATURE_AUTHOR } from './../../../src/constants/author-signature'
import { ITEMS_LIMIT } from '../../../src/constants/pagination'
import { ICategoryResponse } from '../../../src/interfaces/ICategoryResponse'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data: IInternalSearchResponse = await fetch(
      `${MeliEndPoints.SEARCH_ITEMS}?q=${req.query.q}&limit=${ITEMS_LIMIT}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res: ISearchResponse) => {
        return processResponse(res.results)
      })

    res.status(200).json(data)
  } catch (error) {
    res.status(500).send('Server Error Response')
  }
}

async function processResponse(searchResponseResults: Result[]) {
  const { items, categoryHistogram } = mapItems(searchResponseResults)

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
  let categoryPathRes: ICategoryResponse = await fetch(
    `${MeliEndPoints.CATEGORIES}/${categoryId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
  const pathFromRoot: ICategory[] = categoryPathRes.path_from_root.map(
    (category) => ({
      id: category.id,
      name: category.name,
    })
  )

  return pathFromRoot
}
