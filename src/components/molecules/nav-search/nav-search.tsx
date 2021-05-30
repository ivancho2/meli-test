import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './nav-search.module.scss'

export const NavSearch = () => {
  const {
    query: { search },
  } = useRouter()

  return (
    <form
      className={styles['nav-search']}
      action="/items?"
      method="GET"
      role="search"
    >
      <input
        name="search"
        required
        tabIndex={0}
        type="text"
        placeholder="Nunca dejes de buscar"
        maxLength={120}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        aria-label="Ingresa lo que quieras encontrar"
        className={styles['nav-search-input']}
        defaultValue={search}
      />
      <button tabIndex={0} type="submit" className={styles['nav-search-btn']}>
        <span className={styles['nav-search-btn-icon']}>
          <Image src="/assets/icons/ic-search.png" alt="Lupa" layout="fill" />
        </span>
      </button>
    </form>
  )
}
