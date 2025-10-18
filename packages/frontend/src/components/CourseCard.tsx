import React from "react";
import "./CourseCard.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

type CourseCardProps = {
  image: string;
  title: string;
  price?: string;
  description: string;
  onBook: () => void;
  onViewMore: () => void;
};

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  price,
  description,
  onBook,
  onViewMore,
}) => {
  const { language } = useLanguage();
  const t = translations[language].courses;

  const handleCallNow = () => {
    window.location.href = "tel:+447414724401";
  };

  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-card-image" />
      <h3 className="course-card-title">{title}</h3>
      <p className="course-card-description">{description}</p>
      <p className="course-card-price">{price}</p>
      <div className="course-card-buttons">
        <button onClick={handleCallNow} className="btn-book">
          {t.bookNow}
        </button>
        <button onClick={onViewMore} className="btn-view-more">
          {t.viewMore}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
