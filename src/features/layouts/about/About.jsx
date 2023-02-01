import React from 'react'
import styles from './about.module.css'

import SectionHeader from '../../components/sectionHeader/SectionHeader'
import HomeStart from '../start/HomeStart'
import Navigation from '../Navigation/Navigation'
import Footer from '../footer/Footer'
const about = () => {
  return (
    <section className={styles.About}>
      <Navigation/>
      <SectionHeader title='Haqımızda'/>
      <HomeStart/>
      <Footer/>
    </section>
  )
}

export default about