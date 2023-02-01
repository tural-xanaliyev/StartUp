import React from "react";
import styles from "./footer.module.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdMail, MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_background}></div>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_box}>
            <div className={styles.footer_icon_box}></div>
            <p>
              Desires to obtain pain of itself, because it is pain, but
              occasionally circumstances.
            </p>
            <div className={styles.footer_icon_box}>
              <Link><FaFacebookF /></Link>
              <Link><FaInstagram /></Link>
            </div>
          </div>
          <div className={styles.footer_box}>
            <h4>Explore</h4>
            <div className={styles.footer_line}>
              <div></div>
            </div>
            <ul>
              <li><Link>Bizim kampaniya</Link></li>
              <li><Link>Yeniliklər</Link></li>
              <li><Link>Əlaqə</Link></li>
            </ul>
          </div>
          <div className={styles.footer_box}>
            <h4>Əlaqə</h4>
            <div className={styles.footer_line}>
              <div></div>
            </div>
            <p>66 Road Broklyn Street, 600 New York, USA</p>
            <ul>
              <li>
                <MdMail /> needhelp@company.com
              </li>
              <li>
                <MdCall /> +92 666 888 0000
              </li>
            </ul>
          </div>
          <div className={styles.footer_box}>
            <h4>Galeriya</h4>
            <div className={styles.footer_line}>
              <div></div>
            </div>
            <div className={styles.gallery_box}>
              <div className={styles.img_box}></div>
              <div className={styles.img_box}></div>
              <div className={styles.img_box}></div>
              <div className={styles.img_box}></div>
              <div className={styles.img_box}></div>
              <div className={styles.img_box}></div>
            </div>
          </div>
        </div>
        <div className={styles.footer_footer}>
          <p>© Copyright 2022 by kodesolution.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
