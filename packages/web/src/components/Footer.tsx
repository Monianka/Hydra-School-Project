"use client";
import React from 'react';
import styles from './Footer.module.css';
import { translations } from '@/translations';
import { useLanguage } from '@/context/LanguageContext';

const facbookIcon = "/icons/1920524_facebook_facebook icon_logo_network_icon.png";
const instagramIcon = "/icons/1161953_instagram_icon(2).png";
const youtubeIcon = "/icons/211929_social_youtube_icon.png";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-section"]}>
          <h3>{t.contact}</h3>
          <p>Phone: +447414724401</p>
          <p>Address: 17 Alkerden Ln, Swanscombe DA10 0EQ</p>
          <p>{t.area}</p>
          <p>{t.staff}</p>
        </div>

        <div className={styles["footer-section"]}>
          <h3>{t.quickLinks}</h3>
          <ul>
            <li>
              <button onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.courses}
              </button>
            </li>
            <li>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.about}
              </button>
            </li>
          </ul>
        </div>

        <div className={styles["footer-section"]}>
          <h3>{t.followUs}</h3>
          <div className={styles["footer-social"]}>
            <a href="https://www.facebook.com/HydraScubaDiving" target="_blank" rel="noopener noreferrer">
              <img src={facbookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/hydra.divers/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@divinglens" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <p>&copy; 2024 Hydra Scuba Diving School - PADI Certified Diving School in London & Kent. {t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
