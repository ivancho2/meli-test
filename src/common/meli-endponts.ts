export const SEARCH_ITEMS = process.env.EXTERNAL_API_URL + '/sites/MLA/search' // ?q=:query ==> '/api/items?q=:query'

export const ITEM_DATA = process.env.EXTERNAL_API_URL + '/items' // '/:id' && '/:id/description' ==> '/api/items/:id'

export const CATEGORIES = process.env.EXTERNAL_API_URL + '/categories' // '/:id_category'  {path_from_root}
