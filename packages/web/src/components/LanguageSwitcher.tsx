"use client";
import React from 'react';
import styles from './LanguageSwitcher.module.css';
import { useLanguage } from '@/context/LanguageContext';
const plFlag = '/icons/icons8-poland-48.png';
const gbFlag = '/icons/icons8-united-kingdom-48.png';
const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles["language-switcher"]}>
      <button 
        className={`${styles['lang-btn']} ${language === 'en' ? styles['active'] : ''}`}
        onClick={() => setLanguage('en')}
      >
        <img src={gbFlag} alt="English" className={styles["flag-icon"]} />
      </button>
      <button 
        className={`${styles['lang-btn']} ${language === 'pl' ? styles['active'] : ''}`}
        onClick={() => setLanguage('pl')}
      >
        <img src={plFlag} alt="Polski" className={styles["flag-icon"]} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
