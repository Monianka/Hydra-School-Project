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
      <div className="blog-section-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} readMoreLabel={t.readMore} readingTimeLabel={t.minRead} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
