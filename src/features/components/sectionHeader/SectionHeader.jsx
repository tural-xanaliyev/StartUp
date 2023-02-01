import React from 'react'
import styles from './sectionHeader.module.css'
import {FaArrowRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const SectionHeader = ({title}) => {
  return (
    <section className={styles.sectionHeade}>
      <div className={styles.section_content}>
        <div className={styles.section_header}>
          <ul>
            <li><Link to="/"><div>Home</div> <FaArrowRight/></Link></li>
            <li>{title}</li>
          </ul>
        </div>
        <div className={styles.section_body}>
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default SectionHeader