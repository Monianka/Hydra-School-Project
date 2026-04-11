import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Course, courses } from "../utils/coursesData";
import "./CourseDetail.css";
import { useNavigate, useParams } from "react-router";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiEye, FiCheckCircle, FiBook, FiSettings, FiShield, FiAward, FiCompass } from "react-icons/fi";
import type { IconType } from "react-icons";

const renderIcon = (Icon: IconType) => React.createElement(Icon as React.ComponentType);

const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language].courses;
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <p>Course not found</p>;

  const courseData = course.translations[language];
  const full = courseData.fullDescription;

  const handleBookNow = () => {
    console.log("Book Now button clicked!");
    alert(
      "This function is not available yet, for more information please contact us at +447414724401",
    );
  };
  const handleCallNow = () => {
    window.location.href = "tel:+447414724401";
  };
  return (
    <div className="course-detail-page">
      <Helmet>
        <title>{`${courseData.title} | Hydra-Scuba Diving School`}</title>
        <meta name="description" content={courseData.description} />
        <link
          rel="canonical"
          href={`https://hydra-scubadiving.com/courses/${course.slug}`}
        />
        <meta
          property="og:title"
          content={`${courseData.title} | Hydra-Scuba Diving School`}
        />
        <meta property="og:description" content={courseData.description} />
        <meta
          property="og:url"
          content={`https://hydra-scubadiving.com/courses/${course.slug}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <div className="course-detail-back-bar">
        <button className="course-detail-back-btn" onClick={() => navigate("/courses")}>
          &#8592; {language === "pl" ? "Wróć do kursów" : "Back to Courses"}
        </button>
      </div>
      <HeroSection
      title={courseData.title}
      subtitle={courseData.description}
      buttonLabel={t.bookNow}
      onButtonClick={handleBookNow}
    />
      {full ? (
        <>
          <div className="course-detail-sections">
            <div className="course-detail-block">
              <span className="course-detail-block-icon">{renderIcon(FiEye)}</span>
              <h3>{t.overview}</h3>
              <p>{full.overview}</p>
            </div>
            <div className="course-detail-block">
              <span className="course-detail-block-icon">{renderIcon(FiCheckCircle)}</span>
              <h3>{t.prerequisites}</h3>
              <ul>
                {full.prerequisites.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="course-detail-block">
              <span className="course-detail-block-icon">{renderIcon(FiBook)}</span>
              <h3>{t.whatYouWillLearn}</h3>
              <ul>
                {full.whatYouWillLearn.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="course-detail-block">
              <span className="course-detail-block-icon">{renderIcon(FiSettings)}</span>
              <h3>{t.howItWorks}</h3>
              <p>{full.howItWorks}</p>
            </div>
          </div>
          <div className="course-modal-buttons">
            <button className="btn-book" onClick={handleBookNow}>
              {t.bookNow}
            </button>
            <button className="btn-call" onClick={handleCallNow}>
              {t.call}
            </button>
          </div>
        </>
      ) : (
        <div className="course-detail-block">
          <p>{t.noDetails}</p>
        </div>
      )}

      <div className="course-why-section">
        <h2 className="course-why-title">{t.whyDiveWithUs}</h2>
        <div className="course-why-grid">
          <div className="course-why-block">
            <span className="course-why-icon">{renderIcon(FiShield)}</span>
            <h3>{t.safety}</h3>
            <p>{t.safetyDesc}</p>
          </div>
          <div className="course-why-block">
            <span className="course-why-icon">{renderIcon(FiAward)}</span>
            <h3>{t.experience}</h3>
            <p>{t.experienceDesc}</p>
          </div>
          <div className="course-why-block">
            <span className="course-why-icon">{renderIcon(FiCompass)}</span>
            <h3>{t.adventure}</h3>
            <p>{t.adventureDesc}</p>
          </div>
        </div>
      </div>
      <Footer />
        </div>
  );
};
export default CourseDetail;
