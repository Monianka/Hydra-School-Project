import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchBlog, BlogPost } from '../services/blogs';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let mounted = true;
    setLoading(true);
    setError(null);
    fetchBlog(slug, language)
      .then((data) => {
        if (mounted) setPost(data);
      })
      .catch((err) => {
        if (mounted) setError(err?.message || 'Failed to load post');
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
  if (!post)
    return (
      <div className="page-container">
        <Header />
        <div style={{ padding: 24 }}>Not found</div>
        <Footer />
      </div>
    );

  return (
    <div className="page-container">
      <Header />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <div style={{ marginBottom: 16 }}>
        <Link to="/blog">← Back to Blog</Link>
      </div>
      <h1 style={{ marginBottom: 8 }}>{post.title}</h1>
      {post.author && (
        <div style={{ color: '#666', marginBottom: 16 }}>By {post.author}</div>
      )}
      {post.coverImage && (
        <div style={{ margin: '8px 0 16px' }}>
          <img src={post.coverImage} alt={post.title} style={{ maxWidth: '100%', borderRadius: 8 }} />
        </div>
      )}
      <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{post.content}</div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
