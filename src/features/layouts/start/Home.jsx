import React from 'react'
import HomeAbout from './HomeAbout'
import HomeBest from './HomeBest'
import HomeBox from './HomeBox'
import HomeContact from './HomeContact'
import HomeCurs from './HomeCurs'
import HomeHeader from './HomeHeader'
import HomeServices from './HomeServices'
import HomeStart from './HomeStart'
import styles from './home.module.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../footer/Footer'
const Home = () => {
  
  return (
    <div className={styles.Home}>
      <Navigation/>
      <HomeHeader/>
      <HomeAbout/>
      <HomeStart/>
      <HomeServices/>
      <HomeBest/>
      <HomeCurs/>
      <HomeContact/>
      <HomeBox/>
      <Footer/>
    </div>
  )
}

export default Home