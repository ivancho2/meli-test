import React from 'react'
import Image from 'next/image'

import styles from './product-description.module.scss'
import { Button } from '../../atoms/button/button'

export const ProductDescription = () => {
  return (
    <div className={styles['ui-product']}>
      <div className={styles['ui-product__image']}>
        <Image src="/assets/images/680.png" alt="TODO: add" layout="fill" />
      </div>
      <div className={styles['ui-product__details-info']}>
        <h4 className={styles['ui-product__details-info__solds']}>
          Nuevo - 2 vendidos
        </h4>
        <h1 className={styles['ui-product__details-info__name']}>
          Deco Reverse Sombrero Oxford
        </h1>
        <h2 className={styles['ui-product__details-info__price']}>$ 1.980</h2>
        <Button text={'Comprar'} />
      </div>
      <div className={styles['ui-product__description']}>
        <h3 className={styles['ui-product__description__title']}>
          Descripción del producto
        </h3>
        <p className={styles['ui-product__description__paragraph']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit
          exercitationem nemo quibusdam illo, eum quaerat aut dolor expedita
          consequuntur cumque? Nisi, unde illum! Ducimus magni expedita debitis
          culpa vitae? Vitae facilis nulla tempore architecto dignissimos. Fuga,
          expedita tempora enim laborum modi? Sunt!
        </p>
      </div>
    </div>
  )
}
