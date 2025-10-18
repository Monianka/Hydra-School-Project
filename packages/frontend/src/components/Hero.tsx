import React from "react";
import promoVideo from "../assets/videos/hydra_promo_Trim_2.mp4";
import "./HeroSection.css";
import facbookIcon from "../assets/icons/1920524_facebook_facebook icon_logo_network_icon.png";
import instagramIcon from "../assets/icons/1161953_instagram_icon(2).png";
import youtubeIcon from "../assets/icons/211929_social_youtube_icon.png";
import pin from "../assets/icons/icons8-address-50.png";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById("courses");
    coursesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src={promoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Professional Scuba Diving School in London & Kent</h1>
          <p>Join our certified PADI courses at Hydra Diving School</p>
          <button className="hero-button" onClick={scrollToCourses}>
            View Courses
          </button>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/HydraScubaDiving"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facbookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/hydra.divers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/@divinglens"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="youTube" />
          </a>
          <a
            href="https://www.google.com/maps/place/Hydra-Scuba+Diving+School/@51.4426834,0.2977261,18.75z/data=!4m15!1m8!3m7!1s0x47d8b6bb6e60fdfb:0xab1ac0dbd1ce0af2!2s17+Alkerden+Ln,+Swanscombe+DA10+0EQ!3b1!8m2!3d51.4428892!4d0.2982478!16s%2Fg%2F11rp2ngfdz!3m5!1s0x47d8b78fe2750669:0xa67893a916debc8d!8m2!3d51.4428892!4d0.2982478!16s%2Fg%2F11n2d8mrgv?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="header-location"
            title="View on Google Maps"
          >
            {" "}
            <img src={pin} alt="address" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;