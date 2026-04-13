import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { getBlogPosts } from '../utils/blogData';
import BlogCard from './BlogCard';
import './BlogSection.css';

const BlogSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].blog;
  const posts = getBlogPosts(language).slice(0, 3);
  const [current, setCurrent] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);

  const prev = () => setCurrent((index) => (index === 0 ? posts.length - 1 : index - 1));
  const next = () => setCurrent((index) => (index === posts.length - 1 ? 0 : index + 1));

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
    <section className="blog-section">
      <Helmet>
        <meta
          name="keywords"
          content={
            language === 'pl'
              ? 'blog nurkowy, kursy PADI, nurkowanie w Anglii, nurkowanie po polsku'
              : 'scuba diving blog, PADI courses, diving in England, Polish scuba school'
          }
        />
      </Helmet>
      <div className="blog-section-header">
        <div>
          <p className="blog-section-kicker">Blog</p>
          <h2>{t.sectionTitle}</h2>
          <p className="blog-section-subtitle">{t.sectionSubtitle}</p>
        </div>
        <Link to="/blog" className="blog-section-all-link">
          {t.allArticles}
        </Link>
      </div>
      <div
        className="blog-section-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="blog-section-carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {posts.map((post) => (
            <div className="blog-section-carousel-slide" key={post.id}>
              <BlogCard post={post} readMoreLabel={t.readMore} readingTimeLabel={t.minRead} />
            </div>
          ))}
        </div>
        {current > 0 && (
          <button
            className="blog-section-carousel-btn blog-section-carousel-btn-prev"
            onClick={prev}
            aria-label="Previous"
          >
            &#8249;
          </button>
        )}
        <button
          className="blog-section-carousel-btn blog-section-carousel-btn-next"
          onClick={next}
          aria-label="Next"
        >
          &#8250;
        </button>
        <div className="blog-section-carousel-dots">
          {posts.map((_, index) => (
            <button
              key={index}
              className={`blog-section-carousel-dot${index === current ? ' active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="blog-section-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} readMoreLabel={t.readMore} readingTimeLabel={t.minRead} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
