import React from 'react'
import Image from 'next/image'

import styles from './product-description.module.scss'
import { Button } from '../../atoms/button/button'
import { CONDITION } from '../../../constants/copy-convertion'
import { formatCurrency } from '../../../utils/formatCurrency'
import { IItemData } from '../../../interfaces/IInternalItemResponse'

type Props = {
  item: IItemData
}

export const ProductDescription = ({ item }: Props) => {
  return (
    <div className={styles['ui-product']}>
      <div className={styles['ui-product__image']}>
        <Image src={item.picture} alt={item.title} layout="fill" />
      </div>
      <div className={styles['ui-product__details-info']}>
        <h4 className={styles['ui-product__details-info__solds']}>
          {CONDITION[item.condition]} - {item.sold_quantity} vendidos
        </h4>
        <h1 className={styles['ui-product__details-info__name']}>
          {item.title}
        </h1>
        <h2 className={styles['ui-product__details-info__price']}>
          {formatCurrency(item.price.amount)}
        </h2>
        <Button text={'Comprar'} />
      </div>
      <div className={styles['ui-product__description']}>
        <h3 className={styles['ui-product__description__title']}>
          Descripción del producto
        </h3>
        <p className={styles['ui-product__description__paragraph']}>
          {item.description || 'Sin descripción'}
        </p>
      </div>
    </div>
  )
}
