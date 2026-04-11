import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchBlog, BlogPost } from '../services/blogs';
import { translations } from '../translations';
import './BlogDetail.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language].blog;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    let mounted = true;
    setLoading(true);
    fetchBlog(slug, language)
      .then((data) => {
        if (mounted) setPost(data);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [slug, language]);

  if (loading)
    return (
      <div className="blog-detail-page">
        <Header />
        <div className="blog-detail-state">Loading...</div>
        <Footer />
      </div>
    );
  if (!post)
    return (
      <div className="blog-detail-page">
        <Header />
        <div className="blog-detail-state">Not found</div>
        <Footer />
      </div>
    );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    image: post.coverImage,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: `https://hydra-scubadiving.com/blog/${post.slug}`
  };

  return (
    <div className="blog-detail-page">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.seoDescription} />
        <link rel="canonical" href={`https://hydra-scubadiving.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://hydra-scubadiving.com/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.publishedAt} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Header />
      <main className="blog-detail-main">
        <article className="blog-article">
          <Link to="/blog" className="blog-back-link">
            {t.backToBlog}
          </Link>
          <div className="blog-article-hero">
            <div className="blog-article-copy">
              <p className="blog-article-category">{post.category}</p>
              <h1>{post.title}</h1>
              <p className="blog-article-intro">{post.intro}</p>
              <div className="blog-article-meta">
                <span>{t.by} {post.author}</span>
                <span>{new Date(post.publishedAt).toLocaleDateString(language === 'pl' ? 'pl-PL' : 'en-GB')}</span>
                <span>{post.readingTime} {t.minRead}</span>
              </div>
            </div>
            <div className="blog-article-image-wrap">
              <img src={post.coverImage} alt={post.title} className="blog-article-image" />
            </div>
          </div>
          <div className="blog-article-body-layout">
            <div className="blog-article-body">
              <p className="blog-article-lead">{post.content}</p>
              {post.sections.map((section) => (
                <section key={section.heading} className="blog-article-section">
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph, index) => (
                    <p key={`${section.heading}-${index}`}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
            <aside className="blog-article-aside">
              <div className="blog-article-aside-card">
                <h3>{language === 'pl' ? 'Najważniejsze informacje' : 'Quick Facts'}</h3>
                <p>{language === 'pl' ? 'Temat' : 'Category'}: {post.category}</p>
                <p>{language === 'pl' ? 'Czas czytania' : 'Reading time'}: {post.readingTime} {t.minRead}</p>
                <p>{language === 'pl' ? 'Tagi' : 'Tags'}: {post.tags.join(', ')}</p>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
