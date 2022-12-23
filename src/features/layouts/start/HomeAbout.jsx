import React from 'react'
import styles from './home.module.css'
import Solition1 from './../../assets/png/solition/solution1.png'
import Solition2 from './../../assets/png/solition/solution2.png'
import Solition3 from './../../assets/png/solition/solution3.png'
import BackgroundImg from './../../assets/jpg/cardBackground.jpg'
const card = [
    {
        id: 1,
        title: 'Perfect Business Solutions',
        content: 'When an unknown printer took a galley type book that smart looking',
        icon: Solition1,
    },
    {
        id: 2,
        title: 'Business Growth Planning',
        content: 'When an unknown printer took a galley type book that smart looking',
        icon: Solition2,
    },
    {
        id: 3,
        title: 'Search Engine Optimization',
        content: 'When an unknown printer took a galley type book that smart looking',
        icon: Solition3,
    }
]

const HomeAbout = () => {

    const renderdeCard = card.map(item => {
        return (
            <div className={styles.Home_card} key={item.id}>
                <div>
                <div className={styles.Home_card_title}>
                    <div className={styles.iconBox}>
                        <img src={item.icon} alt="icon" height='48px' />
                    </div>
                    <h5>{item.title}</h5>
                </div>
                <p>{item.content}</p>
                </div>
                <div className={styles.background_container}>
                    <img src={BackgroundImg} alt="img" />
                </div>
            </div>
        )
    })

    return (
        <section className={styles.HomeAbout}>
            <div className={styles.HomeAbout_contet}>
                <div className={styles.HomeAbout_top}>
                    {renderdeCard}
                </div>
                <div className={styles.HomeAbout_bottom}></div>
            </div>
        </section>
    )
}

export default HomeAbout