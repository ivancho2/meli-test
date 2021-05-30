import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './to-home.module.scss'

export const ToHome = (props: { [key: string]: any }) => {
  const classList: string = [props.className, styles['ui-to-home']].join(' ')

  return (
    <Link href="/">
      <a {...props} className={classList}>
        <Image
          src="/assets/images/logo.png"
          width={53}
          height={36}
          alt="Mercadolibre Logo"
          layout="intrinsic"
        />
      </a>
    </Link>
  )
}
