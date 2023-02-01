import React, { useState } from "react";
import styles from "./home.module.css";
import HomeTogle from "./HomeTogle";
const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className={styles.HomeContact}>
      <div className={styles.HomeContact_left}>
        <div className={styles.contact_us}>
          <h6>Contact us</h6>
          <h3>Write Email</h3>
          <form className={styles.contact_us_form}>
            <input
              type="text"
              placeholder="Adınız"
              id="name"
              aria-label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Addresiviz"
              id="email"
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Telefon Nömrəviz"
              id="number"
              aria-label="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              name="message"
              id="message"
              aria-label="message"
              placeholder="Messaj yaz"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button>Messaj Göndər</button>
          </form>
        </div>
      </div>
      <div className={styles.HomeContact_right}>
        <div className={styles.title_wraper}>
          <h6>QUESTIONS & ANSWERS</h6>
          <h2>See Frequently Asked Questions</h2>
        </div>
        <HomeTogle/>
      </div>
    </section>
  );
};

export default HomeContact;
