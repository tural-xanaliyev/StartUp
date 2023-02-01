import React from 'react'
import Discoverbutton from '../../components/Button/Discoverbutton'
import img from './../../assets/jpg/bg16.jpg'
import backgroundImg from './../../assets/png/bg.png'
import styles from './home.module.css'
const HomeBox = () => {
  return (
    <section className={styles.HomeBox}>
        <div className={styles.HomeBox_left}>
            <img src={img} alt="img"/>
        </div>
        <div className={styles.HomeBox_right}>
            <div>
                <h3>We’re Ready Develop Your Site!</h3>
                <Discoverbutton content="daha çox kəşf edin"/>
            </div>
        </div>
    </section>
  )
}

export default HomeBox