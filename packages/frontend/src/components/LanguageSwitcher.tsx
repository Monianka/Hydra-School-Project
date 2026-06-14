import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import plFlag from '../assets/icons/icons8-poland-48.png';
import gbFlag from '../assets/icons/icons8-united-kingdom-48.png';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch language to English"
      >
        <img src={gbFlag} alt="English" className="flag-icon" width={48} height={48} />
      </button>
      <button 
        className={`lang-btn ${language === 'pl' ? 'active' : ''}`}
        onClick={() => setLanguage('pl')}
        aria-label="Switch language to Polish"
      >
        <img src={plFlag} alt="Polski" className="flag-icon" width={48} height={48} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
