import React from 'react'
import styles from './Header.module.css'

function Header(props) {
  return (
    <div className={styles.header}>practicing the Header component with module css in <strong>{props.name}</strong> </div>
  )
}

export default Header