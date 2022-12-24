import React from 'react'
import styles from './home.module.css'
import Button from './../../components/Button/Discoverbutton'
import img1 from './../../assets/jpg/1.jpg'
import img2 from './../../assets/jpg/2.jpg'
import img3 from './../../assets/jpg/3jpg.jpg'
import icon1 from './../../assets/png/group.png'
import icon2 from './../../assets/png/idea.png'
const HomeStart = () => {
    return (
        <section className={styles.HomeStart}>
            <div>
                <div className={styles.HomeStart_left}>
                    <div className={styles.img_box}>
                        <img src={img1} alt="img" />
                        <img src={img2} alt="img" />
                    </div>
                    <div className={styles.HomeStart_left_box}>
                        <div>
                            <img src={img3} alt="img" />
                        </div>
                        <div>
                            <h2>3,600+</h2>
                            <h5>Satisfied Client</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.HomeStart_right}>
                    <div className={styles.HomeStart_right_title_wraper}>
                        <h6>ABOUT OUR COMPANY</h6>
                        <h2>We Execute Our ideas From The Start to Finish</h2>
                    </div>
                    <p>
                        Web designing in a powerful way of just not an only
                        professions, however, in a passion for our Company.
                        We have to a tendency to believe the idea that smart looking of
                        any website is the first impression on visitors
                    </p>
                    <div className={styles.element_container}>
                        <div className={styles.element_container_left}>
                            <div className={styles.element_container_widget}>
                                <img src={icon1} alt="icon" />
                                <div className={styles.widget_text}>
                                    <h5>Manage Tech Services</h5>
                                    <p>We’ve designed a culture that allows our stewards to assimilate</p>
                                </div>
                            </div>
                            <div className={styles.element_container_widget}>
                                <img src={icon2} alt="icon" />
                                <div className={styles.widget_text}>
                                    <h5>Internal Networking</h5>
                                    <p>We’ve designed a culture that allows our stewards to assimilate</p>
                                </div>
                            </div>
                            <Button />
                        </div>
                        <div className={styles.element_container_right}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeStart