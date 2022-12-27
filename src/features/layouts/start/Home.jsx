import React from 'react'
import HomeAbout from './HomeAbout'
import HomeBest from './HomeBest'
import HomeContact from './HomeContact'
import HomeCurs from './HomeCurs'
import HomeHeader from './HomeHeader'
import HomeServices from './HomeServices'
import HomeStart from './HomeStart'

const Home = () => {
  return (
    <div>
      <HomeHeader/>
      <HomeAbout/>
      <HomeStart/>
      <HomeServices/>
      <HomeBest/>
      <HomeCurs/>
      <HomeContact/>
    </div>
  )
}

export default Home