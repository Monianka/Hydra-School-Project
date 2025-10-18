import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchBlogs, BlogPost } from '../services/blogs';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogList: React.FC = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);
    fetchBlogs(language)
      .then((data) => {
        if (mounted) setPosts(data);
      })
      .catch((err) => {
        if (mounted) setError(err?.message || 'Failed to load blog posts');
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
      <div className="page-container">
        <Header />
        <div style={{ padding: 24 }}>Loading...</div>
        <Footer />
      </div>
    );
  if (error)
    return (
      <div className="page-container">
        <Header />
        <div style={{ padding: 24, color: 'red' }}>{error}</div>
        <Footer />
      </div>
    );

  return (
    <div className="page-container">
      <Header />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Blog</h1>
      {posts.length === 0 && <div>No posts yet.</div>}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {posts.map((p) => (
          <li key={p.id} style={{ borderBottom: '1px solid #eee', padding: '16px 0' }}>
            <h2 style={{ margin: '0 0 8px' }}>
              <Link to={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            {p.coverImage && (
              <div style={{ margin: '8px 0' }}>
                <img src={p.coverImage} alt={p.title} style={{ maxWidth: '100%', borderRadius: 8 }} />
              </div>
            )}
            <p style={{ margin: 0, color: '#555' }}>
              {p.content?.slice(0, 160)}{p.content && p.content.length > 160 ? '…' : ''}
            </p>
            <div style={{ marginTop: 8 }}>
              <Link to={`/blog/${p.slug}`}>Read more</Link>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
