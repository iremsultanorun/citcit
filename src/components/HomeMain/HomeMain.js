import React from 'react'
import styles from "./HomeMain.module.css";
import Image from 'next/image';
import CountDown from '../CountDown/CountDown';
function HomeMain() {
  return (
  <main className={styles.home_main}>
    <Image
      className={styles.home_heroImage}
      src="/coming-soon.png"
      alt="Coming soon görseli"
      width={500}
      height={500}
      priority
    />

    <div className={styles.home_intro}>
      <span className={styles.home_brand}>çıt çıt</span>

      <p className={styles.home_headline}>
        ÇITIRTININ EN LEZZETLİ HALİ YAKINDA
      </p>

      <Image
        className={styles.home_arrow}
        src="/arrow.png"
        alt="Aşağıyı gösteren ok"
        width={500}
        height={500}
        priority
      />

      <div className={styles.home_location}>212 Outlet AVM'de!</div>

     <CountDown/>
    </div>
  </main>

  )
}

export default HomeMain