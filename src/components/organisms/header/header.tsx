import React from 'react'

import { ToHome } from '../../atoms/to-home/to-home'
import { NavSearch } from '../../molecules/nav-search/nav-search'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles['main-header']}>
      <nav className={styles['main-header-nav']}>
        <ToHome tabIndex="0" className={styles['to-home']} />
        <NavSearch />
      </nav>
    </header>
  )
}
