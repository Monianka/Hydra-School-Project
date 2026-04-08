import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';
import facbookIcon from "../assets/icons/1920524_facebook_facebook icon_logo_network_icon.png";
import instagramIcon from "../assets/icons/1161953_instagram_icon(2).png";
import youtubeIcon from "../assets/icons/211929_social_youtube_icon.png";
import padiLogo from "../assets/logos/Padi_logo_no_bc_white.png";
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{t.contact}</h3>
          <p>Phone: +447414724401</p>
          <p>Address: 95 Colyer Drive, Alkerden, Swanscombe DA10 1GT</p>
          <p>Serving London, Kent and surrounding areas</p>
          <p>Polish/English Speaking Staff</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => document.getElementById('Course')?.scrollIntoView({ behavior: 'smooth' })}>Courses</button></li>
            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About Us</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-social">
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
      <div className="footer-bottom">
        <img src={padiLogo} alt="PADI" className="footer-padi-logo" />
        <p>&copy; 2024 Hydra Scuba Diving School - PADI Certified Diving School in London & Kent. {t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
