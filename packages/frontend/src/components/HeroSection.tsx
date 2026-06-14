import React, { useState, useEffect } from "react";
import promoVideo from "../assets/videos/hydra_promo_Trim_2.mp4";
import "./HeroSection.css";
import facbookIcon from "../assets/icons/1920524_facebook_facebook icon_logo_network_icon.png";
import instagramIcon from "../assets/icons/1161953_instagram_icon(2).png";
import youtubeIcon from "../assets/icons/211929_social_youtube_icon.png";
import pin from "../assets/icons/icons8-address-50.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;  
  buttonLabel?: string;
  onButtonClick?: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonLabel,
  onButtonClick
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses");
    coursesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const heroTitle = title ?? t.title;
  const heroSubtitle = subtitle ?? t.subtitle;
  const heroButtonLabel = buttonLabel ?? t.viewCourses;
  const handleButtonClick = onButtonClick ?? scrollToCourses;

  return (
    <section className="hero-section">
      {isLoading && <div className="loading-overlay">Loading...</div>}
      <video
        autoPlay
        loop
        muted
        className="hero-video"
        preload="auto"
        onLoadedData={() => setIsLoading(false)}
      >
        <source src={promoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{heroTitle}</h1>
          <p>
            {heroSubtitle}
          </p>
          <button className="hero-button" onClick={handleButtonClick}>
            {heroButtonLabel}
          </button>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/HydraScubaDiving"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Hydra Scuba Diving on Facebook"
          >
            <img src={facbookIcon} alt="Facebook" loading="lazy" width={48} height={48} />
          </a>
          <a
            href="https://www.instagram.com/hydra.divers/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Hydra Scuba Diving on Instagram"
          >
            <img src={instagramIcon} alt="Instagram" loading="lazy" width={48} height={48} />
          </a>
          <a
            href="https://www.youtube.com/@divinglens"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Hydra Scuba Diving on YouTube"
          >
            <img src={youtubeIcon} alt="youTube" loading="lazy" width={48} height={48} />
          </a>
          <a
            href="https://www.google.com/maps/place/Hydra-Scuba+Diving+School/@51.4426834,0.2977261,18.75z/data=!4m15!1m8!3m7!1s0x47d8b6bb6e60fdfb:0xab1ac0dbd1ce0af2!2s17+Alkerden+Ln,+Swanscombe+DA10+0EQ!3b1!8m2!3d51.4428892!4d0.2982478!16s%2Fg%2F11rp2ngfdz!3m5!1s0x47d8b78fe2750669:0xa67893a916debc8d!8m2!3d51.4428892!4d0.2982478!16s%2Fg%2F11n2d8mrgv?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="header-location"
            title="View on Google Maps"
            aria-label="Open Hydra Scuba Diving location in Google Maps"
          >
            {" "}
            <img src={pin} alt="address" width={50} height={50} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;