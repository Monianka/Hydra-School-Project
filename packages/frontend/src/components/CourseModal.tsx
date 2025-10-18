import React from "react";
import "./CourseModal.css";
import { Course } from "../utils/coursesData";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language].courses;
  const courseData = course.translations[language];
  const full = courseData.fullDescription;

  const handleBookNow = () => {
    console.log("Book Now button clicked!");
    alert(
      "This function is not available yet, for more information please contact us at +447414724401"
    );
  };
  const handleCallNow = () => {
    window.location.href = "tel:+447414724401";
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{courseData.title}</h2>
        {full ? (
          <>
            <div className="modal-section">
              <h2>{t.overview}</h2>
              <p>{full.overview}</p>
            </div>
            <div className="modal-section">
              <h3>{t.prerequisites}</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {full.prerequisites.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="modal-section">
              <h3>{t.whatYouWillLearn}</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {full.whatYouWillLearn.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="modal-section">
              <h3>{t.howItWorks}</h3>
              <p>{full.howItWorks}</p>
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
          <div className="modal-section">
            <p>{t.noDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseModal;
