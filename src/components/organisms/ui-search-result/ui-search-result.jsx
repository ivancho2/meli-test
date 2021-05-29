import React from 'react'
import { ItemCard } from '../../molecules/item-card/item-card'

import styles from './ui-search-result.module.scss'

export const UISearchResult = ({ items }) => {
  return (
    <div className={styles['ui-search']}>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />
      })}
    </div>
  )
}
