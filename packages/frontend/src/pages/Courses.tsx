import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses, Course as CourseType } from "../utils/coursesData";
import CourseModal from "../components/CourseModal";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Courses: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
  const t = translations[language].courses;

  const handleViewMore = (course: CourseType) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };
  return (
    <div>
      <h2>{t.sectionTitle}</h2>
      {language === "pl" && (
      <p style={{fontWeight: "bold", marginBottom: "1rem"}}>
        Polska szkoła nurkowania, szkoła nurkowania w Anglii, kursy nurkowania PADI po polsku i angielsku.
      </p>)}
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
        <CourseModal
          course={selectedCourse}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
export default Courses;
