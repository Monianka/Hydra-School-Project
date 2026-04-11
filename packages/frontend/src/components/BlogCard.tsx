import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/blog';
import './BlogCard.css';

type BlogCardProps = {
  post: BlogPost;
  readMoreLabel: string;
  readingTimeLabel: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ post, readMoreLabel, readingTimeLabel }) => {
  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card-media-link" aria-label={post.title}>
        <img
          src={post.cardImage ?? post.coverImage}
          alt={post.title}
          className="blog-card-image"
          loading="lazy"
          decoding="async"
          width={960}
          height={600}
        />
      </Link>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{post.category}</span>
          <span>{post.readingTime} {readingTimeLabel}</span>
        </div>
        <h3 className="blog-card-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="blog-card-link">
          {readMoreLabel}
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
