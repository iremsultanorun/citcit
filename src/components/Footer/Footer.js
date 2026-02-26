import React from 'react';
import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
        <div className={styles.footer_logo}>
        </div>
        <p className={styles.footer_slogan}>"Çıtırtının en lezzetli hali"</p>
        <div className={styles.footer_contact}>
          <h4 className={styles.footer_contactTitle}>İletişim:</h4>
          <div className={styles.footer_socials}>
            <a href='https://www.instagram.com/citcit.tr/' aria-label="Instagram" className={styles.footer_socialLink}>
              <FaInstagram />
            </a>
            <a href='tel:+905458403984' aria-label="Telefon" className={styles.footer_socialLink}>
              <MdOutlineLocalPhone />
            </a>
          </div>
        </div>
      </div>
      <iframe
        className={styles.footer_map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.970554886907!2d28.810285000000004!3d41.047773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5a83957dee3%3A0xbd5ae729a0ad57d7!2s212%20Outlet!5e0!3m2!1str!2str!4v1772103959906!5m2!1str!2str"
        width="1000"
        height="450"
        loading="lazy"
        title="Citcit Konum Haritası"
      ></iframe>
      <div className={styles.footer_copyright}>Tüm hakları saklıdır</div>
    </footer>
  );
}