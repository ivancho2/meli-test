import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { formatCurrency } from '../../../utils/formatCurrency'
import styles from './item-card.module.scss'
import { IItem } from '../../../interfaces/IInternalSearchResponse'

type Props = {
  item: IItem
}

export const ItemCard = ({ item }: Props) => {
  const toLink = `/items/${item.id}`

  return (
    <div className={styles['item-card']}>
      <Link href={toLink}>
        <a className={styles['item-card__image']}>
          <Image
            src={item.picture}
            alt={item.title}
            width={180}
            height={180}
            layout="intrinsic"
          />
        </a>
      </Link>
      <div className={styles['item-card__description']}>
        <div className={styles['item-card__description__cost']}>
          <span className={styles['item-card__description__cost__price']}>
            {formatCurrency(item.price.amount)}
          </span>
          {item.free_shipping && (
            <span className={styles['item-card__description__cost__shipping']}>
              <Image
                src="/assets/icons/ic-shipping.png"
                width={18}
                height={18}
                alt="Envio gratis"
              />
            </span>
          )}
        </div>
        <Link href={toLink}>
          <a className={styles['item-card__description__name']}>{item.title}</a>
        </Link>
      </div>
      <div className={styles['item-card__description__location']}>
        <span>{item.seller_address}</span>
      </div>
    </div>
  )
}
