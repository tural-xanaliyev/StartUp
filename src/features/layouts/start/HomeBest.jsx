import React from 'react'
import styles from './home.module.css'
import icon1 from './../../assets/png/light-bulb.png'
import icon2 from './../../assets/png/light-bulb2.png'
import  background  from './../../assets/jpg/bg2.jpg'
import {BsCheckCircleFill} from 'react-icons/bs'
const HomeBest = () => {
    return (
        <section className={styles.HomeBest}>
            <div className={styles.HomeBest_container}>
                <div className={styles.HomeBest_content_left}>
                    <div className={styles.title_wraper}>
                        <h6>TECH MANAGEMENT</h6>
                        <h2>The Best Source for IT Solutions</h2>
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu convenient scheduling, account fugiat pariatur</p>
                    <div className={styles.element_widget}>
                        <img src={icon2} alt="icon" />
                        <h4>We’re doing the right thing. The right way</h4>
                    </div>
                    <div className={styles.element_widget_container}>
                        <ul>
                            <li>
                                <BsCheckCircleFill/>
                                Lorem Ipsum is not simply random text
                            </li>
                            <li>
                                <BsCheckCircleFill/>
                                Lorem Ipsum is not simply random text
                            </li>
                            <li>
                                <BsCheckCircleFill/>
                                Lorem Ipsum is not simply random text
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.HomeBest_content_right}>
                    <img src={background} alt="background" />
                </div>
            </div>
        </section>
    )
}

export default HomeBest
