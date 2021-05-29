import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ToHome = (props) => {
  return (
    <Link href="/">
      <a {...props}>
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
