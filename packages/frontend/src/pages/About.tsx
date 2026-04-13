import React from "react";
import { Link } from "react-router-dom";
import damian from "../assets/images/Damian2.jpg";
import "./About.css";
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: {
    about: {
      sectionKicker: "About",
      sectionTitle: "About Hydra-Scuba Diving School",
      title: "About Hydra-Scuba Diving School",
      sectionSubtitle: "Professional PADI training with a personal approach, delivered in English and Polish across Kent, London, and beyond.",
      intro: "Founded in 2019 by certified diving instructor Damian Rembiszewski, Hydra-Scuba Diving School is a professional and proudly Polish-owned diving school offering PADI-certified scuba diving courses across Kent, London, and throughout England.",
      readMore: "Read more",
      description: "Founded in 2019 by certified diving instructor Damian Rembiszewski, Hydra-Scuba Diving School is a professional and proudly Polish-owned diving school offering PADI-certified scuba diving courses across Kent, London, and throughout England.\n\nOur diving center is located in Kent, near London, and we provide training for divers of all experience levels — from complete beginners to advanced and professional-level divers. Whether you're a local resident or visiting from elsewhere in the UK, our flexible courses are designed to fit your schedule and learning pace.\n\nAt Hydra-Scuba Diving School, we combine professional scuba instruction with a friendly, personalized approach. We offer training in both English and Polish, ensuring language is never a barrier to becoming a confident and safe diver.\n\nOur core values include:\n\n• Safety-focused training following PADI standards\n• Tailored instruction to match your pace and goals\n• Supportive and experienced instructors\n• Nationwide course delivery — we bring the dive to you\n\nHydra-Scuba Diving School is more than just a school — it's a gateway to the underwater world. Join us and make your first dive unforgettable or take the next step in your diving journey with expert support every step of the way."
    }
  },
  pl: {
    about: {
      sectionKicker: "O nas",
      sectionTitle: "O Szkole Nurkowania Hydra-Scuba Diving",
      title: "O Szkole Nurkowania Hydra-Scuba Diving",
      sectionSubtitle: "Profesjonalne szkolenia PADI z indywidualnym podejściem, prowadzone po polsku i angielsku w Kent, Londynie i całej Anglii.",
      intro: "Założona w 2019 roku przez certyfikowanego instruktora nurkowania Damiana Rembiszewskiego, Hydra-Scuba Diving School to profesjonalna, polska szkoła nurkowania oferująca kursy PADI na terenie Kent, Londynu oraz całej Anglii.",
      readMore: "Czytaj więcej",
      description: "Założona w 2019 roku przez certyfikowanego instruktora nurkowania Damiana Rembiszewskiego, Hydra-Scuba Diving School to profesjonalna, polska szkoła nurkowania oferująca kursy PADI na terenie Kent, Londynu oraz całej Anglii.\n\nNasza baza znajduje się w Kent, w pobliżu Londynu, ale prowadzimy szkolenia nurkowe w różnych lokalizacjach w całym kraju. Oferujemy kursy dla każdego — od początkujących nurków, przez średniozaawansowanych, aż po kandydatów na nurków zawodowych.\n\nW Hydra-Scuba Diving łączymy profesjonalizm z indywidualnym podejściem do każdego kursanta. Szkolenia prowadzimy w języku polskim i angielskim, dzięki czemu bariera językowa nie stanowi przeszkody w zdobywaniu nowych umiejętności pod wodą.\n\nNasze główne atuty to:\n\n• Bezpieczeństwo i zgodność ze standardami PADI\n• Indywidualne podejście do tempa nauki i potrzeb kursanta\n• Doświadczeni instruktorzy z pasją\n• Elastyczna lokalizacja kursów — szkolimy w całej Anglii\n\nHydra-Scuba Diving to nie tylko szkoła — to brama do podwodnego świata. Niezależnie od tego, czy to Twój pierwszy kontakt z nurkowaniem, czy chcesz rozwijać się jako profesjonalista, jesteśmy tutaj, by wspierać Cię na każdym etapie drogi."
    }
  }
};

type AboutProps = {
  showSectionHeader?: boolean;
};

const About: React.FC<AboutProps> = ({ showSectionHeader = false }) => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="about-section">
      {showSectionHeader && (
        <div className="about-section-header">
          <p className="about-section-kicker">{t.sectionKicker}</p>
          <h2>{t.sectionTitle}</h2>
          <p className="about-section-subtitle">{t.sectionSubtitle}</p>
        </div>
      )}
      <div className="about-card">
        <img src={damian} alt="Scuba Instructor" className="about-card-image" />
        <div className="about-card-content">
          <div className="about-card-text">
            {!showSectionHeader && <h2>{t.title}</h2>}
            <p>
              {showSectionHeader ? t.intro : t.description}
              <br />
              <strong>
                {language === "en" ? "Polish diving school, diving school in England, PADI diving courses in Polish and English." : " Polska szkoła nurkowania, szkoła nurkowania w Anglii, kursy nurkowania PADI po polsku i angielsku."}
              </strong>
            </p>
            {showSectionHeader && (
              <Link to="/about" className="about-read-more-link">
                {t.readMore}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
