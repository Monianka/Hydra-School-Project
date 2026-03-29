import React from "react";
import "./CourseCard.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { Link } from "react-router-dom";

type CourseCardProps = {
  image: string;
  title: string;
  price?: string;
  description: string;
  onBook: () => void;
  slug?: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  price,
  description,
  onBook,
  slug,
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
       <Link to={`/courses/${slug}`} className="btn-view-more">
  {t.viewMore}
</Link>
      </div>
    </div>
  );
};

export default CourseCard;
