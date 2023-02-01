import React, { useState } from "react";
import styles from "./contact.module.css";
import SectionHeader from "./../../components/sectionHeader/SectionHeader";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import DiscoverButton from './../../components/Button/Discoverbutton'
import Navigation from "../Navigation/Navigation";
import Footer from "../footer/Footer";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section>
      <Navigation/>
      <SectionHeader title="Əlaqə" />
      <div className={styles.Contact}>
        <div className={styles.contact_left}>
          <h3>Əlaqə</h3>
          <p>
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going a new normal that from
            generation
          </p>
          <div className={styles.icon_box}>
            <div className={styles.icon}>
              <MdEmail />
            </div>
            <div className={styles.icon_box_content}>
              <h5>Email</h5>
              <a href="mailto:help@yourdomain.com">help@yourdomain.com</a>
            </div>
          </div>
          <div className={styles.icon_box}>
            <div className={styles.icon}>
              <FiPhoneCall />
            </div>
            <div className={styles.icon_box_content}>
              <h5>Zəng</h5>
              <a href="tel:+994 XX XXX XX XX">+994 XX XXX XX XX</a>
            </div>
          </div>
        </div>
        <div className={styles.contact_right}>
          <h3>Have Any Questions</h3>
          <p>
            Feel free to contact us through Twitter or Facebook if you prefer!
          </p>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Adınız"
              aria-label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-poçdunuzu daxil edin"
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="commet"
              id="commet"
              placeholder="Şərhinizi daxil edin"
              aria-label="commet"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <DiscoverButton content="Mesaj göndər" />
          </form>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
