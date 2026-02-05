import React from 'react'
import styles from './Button.module.css'

function Button() {
  return (
    <div>
        <button className={styles.btn} onClick={() => alert("Button clicked!")}>Click me</button>

    </div>
  )
}

export default Button