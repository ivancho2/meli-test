import React from 'react'

import styles from './button.module.scss'

export const Button = ({ text, onClick }) => {
  return (
    <button className={styles['ui-button']} {...{ onClick }} tabIndex="0">
      {text}
    </button>
  )
}
