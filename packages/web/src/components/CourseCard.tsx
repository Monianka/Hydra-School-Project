"use client";
import React from "react";
import styles from "./CourseCard.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

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
    <div className={styles["course-card"]}>
      <img src={image} alt={title} className={styles["course-card-image"]} />
      <h3 className={styles["course-card-title"]}>{title}</h3>
      <p className={styles["course-card-description"]}>{description}</p>
      <p className={styles["course-card-price"]}>{price}</p>
      <div className={styles["course-card-buttons"]}>
        <button onClick={handleCallNow} className={styles["btn-book"]}>
          {t.bookNow}
        </button>
        <button onClick={onViewMore} className={styles["btn-view-more"]}>
          {t.viewMore}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
