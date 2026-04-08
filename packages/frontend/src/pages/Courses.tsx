import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses, Course as CourseType } from "../utils/coursesData";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Courses: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].courses;
  const [current, setCurrent] = useState(0);
  const touchStartX = React.useRef<number | null>(null);

  const prev = () => setCurrent(i => (i === 0 ? courses.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === courses.length - 1 ? 0 : i + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <div>
      <h2>{t.sectionTitle}</h2>
      {language === "pl" && (
        <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
          Polska szkoła nurkowania, szkoła nurkowania w Anglii, kursy nurkowania PADI po polsku i angielsku.
        </p>
      )}
      <div className="carousel-wrapper">
        <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {courses.map((course) => (
              <div className="carousel-slide" key={course.id}>
                <CourseCard
                  slug={course.slug}
                  image={course.image}
                  title={course.translations[language].title}
                  price={course.translations[language].price}
                  description={course.translations[language].description}
                  onBook={() => alert(t.bookingMessage)}
                />
              </div>
            ))}
          </div>
          {current > 0 && (
            <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous">&#8249;</button>
          )}
          <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next">&#8250;</button>
        </div>
        <div className="carousel-dots">
          {courses.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Courses;
