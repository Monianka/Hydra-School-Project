"use client";
import React, { useState } from "react";
import { courses, Course as CourseType } from "@/utils/coursesData";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import CourseCard from "@/components/CourseCard";
import CourseModal from "@/components/CourseModal";

type Props = {
  titleClassName?: string;
  showTitle?: boolean;
  showSwipeHint?: boolean;
};

const CoursesSection: React.FC<Props> = ({ titleClassName, showTitle = true, showSwipeHint = false }) => {
  const { language } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
  const t = translations[language].courses;

  const handleViewMore = (course: CourseType) => setSelectedCourse(course);
  const handleCloseModal = () => setSelectedCourse(null);

  return (
    <div>
      {showTitle && <h2 className={titleClassName}>{t.sectionTitle}</h2>}
      {showSwipeHint && (
        <p className="swipe-hint">
          {language === 'pl' ? 'Przesuń, aby zobaczyć więcej' : 'Swipe to see more'}
          <span className="swipe-arrow">→</span>
        </p>
      )}
      {language === "pl" && (
        <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
          Polska szkoła nurkowania, szkoła nurkowania w Anglii, kursy nurkowania PADI po polsku i angielsku.
        </p>
      )}
      <div className="course-card-list">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.translations[language].title}
            price={course.translations[language].price}
            description={course.translations[language].description}
            onBook={() => alert(t.bookingMessage)}
            onViewMore={() => handleViewMore(course)}
          />
        ))}
      </div>
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CoursesSection;
