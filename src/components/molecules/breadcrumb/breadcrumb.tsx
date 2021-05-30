import React from 'react'
import { ICategory } from '../../../interfaces/IInternalSearchResponse'

import styles from './breadcrumb.module.scss'

type Props = {
  categories: ICategory[]
}

export const Breadcrumb = ({ categories }: Props) => {
  return (
    <div className={styles['ui-breadcrumb']}>
      {categories?.map((item) => {
        return (
          <span key={item.id} className={styles['ui-breadcrumb__slug-item']}>
            {item.name}
          </span>
        )
      })}
    </div>
  )
}
