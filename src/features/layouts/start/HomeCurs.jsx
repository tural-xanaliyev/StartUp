import React from 'react'
import styles from './home.module.css'
import cours1 from './../../assets/jpg/cours.jpg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {BsArrowRightCircle} from 'react-icons/bs'
const cours = [
    {
        id: 1,
        title: 'Cours',
        content: "Windows",
        image: cours1
    },
    {
        id: 2,
        title: 'Cours',
        content: "Windows",
        image: cours1
    },
    {
        id: 3,
        title: 'Cours',
        content: "Windows",
        image: cours1
    },
    {
        id: 4,
        title: 'Cours',
        content: "Windows",
        image: cours1
    },
    {
        id: 5,
        title: 'Cours',
        content: "Windows",
        image: cours1
    },
]

const HomeCurs = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
    const items = cours.map(item => {
        return (
            <div className={styles.cours_box} key={item.id}>
                <div className={styles.icon_box}>
                    <BsArrowRightCircle/>
                </div>
                <div className={styles.cours_background}></div>
                <div className={styles.cours_box_img}>
                    <img src={item.image} alt="cours img" />
                </div>
                <div className={styles.cours_box_content}>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })

    return (
        <section className={styles.HomeCurs}>
            <div className={styles.HomeCurs_header}>
                <div className={styles.HomeCurs_header_title}>
                    <div className={styles.title_wraper}>
                        <h6>RECENTLY COMPLETED WORK</h6>
                        <h2>Improve & Enhance the Tech Projects</h2>
                    </div>
                </div>
                <div className={styles.HomeCurs_header_content}>
                    <p>
                        There are many variations of passages of available but majority
                        have suffered alteration in some form, by humou or
                        randomised words which don’t look even slightly believable</p>
                </div>
                <div></div>
            </div>
            <div className={styles.HomeCurs_body}>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    autoPlay
                    disableButtonsControls
                    infinite
                    animationDuration='1000'
                />
            </div>
        </section>
    )
}

export default HomeCurs
