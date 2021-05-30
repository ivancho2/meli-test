import React, { MouseEventHandler } from 'react'

import styles from './button.module.scss'

type Props = {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button className={styles['ui-button']} onClick={onClick} tabIndex={0}>
      {text}
    </button>
  )
}
