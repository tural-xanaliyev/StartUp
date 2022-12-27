import React from 'react'
import Discoverbutton from '../../components/Button/Discoverbutton'
import styles from './home.module.css'
const HomeHeader = () => {
  return (
    <div className={styles.home_header}>
        <div className={styles.home_header_content}>
            <div className={styles.home_header_box}>
                <div></div>
                <span>solutions for your businesses</span>
            </div>
            <h1>Lisenziyalı məhsulların satışı</h1>
            <p>There are many of passages of lorem Inpum,
                but the majori have suffered alteration in some form
            </p>
            <Discoverbutton/>
        </div>
    </div>
  )
}

export default HomeHeader