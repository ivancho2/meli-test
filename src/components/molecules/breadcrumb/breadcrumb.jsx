import React from 'react'

import styles from './breadcrumb.module.scss'

export const Breadcrumb = ({ categories }) => {
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
