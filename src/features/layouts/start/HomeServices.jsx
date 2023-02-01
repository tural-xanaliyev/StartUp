import React from 'react'
import styles from './home.module.css'
import img1 from './../../assets/jpg/margeting1.jpg'
import img2 from './../../assets/jpg/marketing2.jpg'
import img3 from './../../assets/jpg/marketing3.jpg'
import iconImg1 from './../../assets/png/services/Services1.png'
import iconImg2 from './../../assets/png/services/Services2.png'
import iconImg3 from './../../assets/png/services/Services3.png'
import { Link } from 'react-router-dom'
import {FaLongArrowAltRight} from 'react-icons/fa'

const services = [
    {
        id:1,
        title:'Data Visualization',
        content:'Sed non odio non elit porttitor Donec fermentum, elit sit amet',
        image:img1,
        icon:iconImg1,
    },
    {
        id:2,
        title:'UI/UX Designing',
        content:'Sed non odio non elit porttitor Donec fermentum, elit sit amet',
        image:img2,
        icon:iconImg2
    },
    {
        id:3,
        title:'Digital Marketing',
        content:'Sed non odio non elit porttitor Donec fermentum, elit sit amet',
        image:img3,
        icon:iconImg3
    }
]


const HomeServices = () => {
    const renderd = services.map(item => {
        return(
            <div className={styles.services_box} key={`HomeService ${item.id}`}>
                <div className={styles.services_thumb}>
                    <img src={item.image} alt='img' />
                    <div>
                    <img src={item.icon} alt="icon" className={styles.icon_img}/>

                    </div>
                </div>
                <div className={styles.services_content}>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                    <Link to={`/${item.title}`}>READ MORE <FaLongArrowAltRight/></Link>
                </div>
            </div>
        )
    })
  return (
    <section className={styles.HomeServices}>
        <div className={styles.title_wraper}>
            <h6>SERVICES WE’RE OFFERING</h6>
            <h2>High quality products and services that we stand behind</h2>
        </div>
        <div className={styles.HomeServices_body}>
            {renderd}
        </div>
    </section>
  )
}

export default HomeServices
