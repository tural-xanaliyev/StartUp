import React from 'react'
import styles from './discoverButton.module.css'
const Discoverbutton = ({content}) => {
  return (
    <button className={styles.discover_button}>
      {content}
    </button>
  )
}

export default Discoverbutton