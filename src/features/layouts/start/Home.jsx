import React from 'react'
import HomeAbout from './HomeAbout'
import HomeBest from './HomeBest'
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
    </div>
  )
}

export default Home