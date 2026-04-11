import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import CourseCard from "../components/CourseCard";
import { courses, Course as CourseType } from "../utils/coursesData";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

type CoursesProps = {
  layout?: "carousel" | "grid";
};

const Courses: React.FC<CoursesProps> = ({ layout = "carousel" }) => {
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
      <Helmet>
        <title>
          {language === "pl"
            ? "Kursy Nurkowania PADI | Hydra-Scuba Diving School | Londyn, Kent"
            : "Scuba Diving Courses | Hydra-Scuba Diving School | London & Kent"}
        </title>
        <meta
          name="description"
          content={
            language === "pl"
              ? "Profesjonalne kursy nurkowania PADI po polsku i angielsku w Londynie, Kent i całej Anglii. Hydra-Scuba Diving School — polska szkoła nurkowania."
              : "PADI-certified scuba diving courses in London, Kent and across England. Beginner to professional levels. Polish and English instruction. Hydra-Scuba Diving School."
          }
        />
        <link rel="canonical" href="https://hydra-scubadiving.com/courses" />
        <meta
          property="og:title"
          content={
            language === "pl"
              ? "Kursy Nurkowania PADI | Hydra-Scuba Diving School"
              : "Scuba Diving Courses | Hydra-Scuba Diving School"
          }
        />
        <meta
          property="og:description"
          content={
            language === "pl"
              ? "Kursy nurkowania PADI w Londynie, Kent i Anglii. Po polsku i angielsku."
              : "PADI scuba diving courses in London, Kent and England. English and Polish instruction."
          }
        />
        <meta property="og:url" content="https://hydra-scubadiving.com/courses" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className={`courses-section-header${layout === "carousel" ? " courses-section-header-home" : ""}`}>
        <p className="courses-section-kicker">{t.sectionKicker}</p>
        <h2>{t.sectionTitle}</h2>
        <p className="courses-section-subtitle">{t.sectionSubtitle}</p>
        {language === "pl" && layout === "grid" && (
          <p className="courses-section-seo-copy">
            Polska szkoła nurkowania, szkoła nurkowania w Anglii, kursy nurkowania PADI po polsku i angielsku.
          </p>
        )}
      </div>
      {layout === "grid" ? (
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              slug={course.slug}
              image={course.image}
              title={course.translations[language].title}
              price={course.translations[language].price}
              duration={course.translations[language].duration}
              description={course.translations[language].description}
              onBook={() => alert(t.bookingMessage)}
            />
          ))}
        </div>
      ) : (
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
                    duration={course.translations[language].duration}
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
      )}
    </div>
  );
};
export default Courses;
