import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchBlogs, BlogPost } from '../services/blogs';
import { translations } from '../translations';
import './BlogList.css';

const BlogList: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].blog;
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchBlogs(language)
      .then((data) => {
        if (mounted) setPosts(data);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [language]);

  if (loading)
    return (
      <div className="blog-page">
        <Header />
        <div className="blog-page-state">Loading...</div>
        <Footer />
      </div>
    );

  return (
    <div className="blog-page">
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
        <link rel="canonical" href="https://hydra-scubadiving.com/blog" />
        <meta property="og:title" content={t.pageTitle} />
        <meta property="og:description" content={t.pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hydra-scubadiving.com/blog" />
      </Helmet>
      <Header />
      <main className="blog-page-main">
        <section className="blog-page-hero">
          <p className="blog-page-kicker">Hydra Journal</p>
          <h1>{t.allArticles}</h1>
          <p>{t.pageDescription}</p>
        </section>
        {posts.length === 0 ? (
          <div className="blog-page-state">{t.noPostsYet}</div>
        ) : (
          <section className="blog-page-grid">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} readMoreLabel={t.readMore} readingTimeLabel={t.minRead} />
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
