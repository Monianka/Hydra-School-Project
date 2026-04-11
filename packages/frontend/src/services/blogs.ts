import api from './api';
import type { BlogLanguage, BlogPost } from '../types/blog';
import { getBlogPostBySlug, getBlogPosts } from '../utils/blogData';

const API_ENABLED = Boolean(process.env.REACT_APP_API_URL);

type ApiBlogPost = Partial<BlogPost> & {
  id: string;
  slug: string;
  title: string;
  content: string;
};

function normalizeApiPost(post: ApiBlogPost, language: BlogLanguage): BlogPost {
  const fallback = getBlogPostBySlug(post.slug, language);

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt ?? fallback?.excerpt ?? post.content.slice(0, 160),
    intro: post.intro ?? fallback?.intro ?? post.content.slice(0, 220),
    content: post.content,
    coverImage: post.coverImage ?? fallback?.coverImage ?? '',
    cardImage: post.cardImage ?? fallback?.cardImage ?? post.coverImage ?? fallback?.coverImage ?? '',
    category: post.category ?? fallback?.category ?? 'Blog',
    author: post.author ?? fallback?.author ?? 'Hydra-Scuba Diving School',
    readingTime: post.readingTime ?? fallback?.readingTime ?? 5,
    publishedAt: post.publishedAt ?? fallback?.publishedAt ?? new Date().toISOString(),
    seoDescription: post.seoDescription ?? fallback?.seoDescription ?? post.content.slice(0, 155),
    tags: post.tags ?? fallback?.tags ?? [],
    sections:
      post.sections ??
      fallback?.sections ??
      [
        {
          heading: language === 'pl' ? 'Artykuł' : 'Article',
          body: [post.content]
        }
      ]
  };
}

export async function fetchBlogs(lang: BlogLanguage): Promise<BlogPost[]> {
  if (!API_ENABLED) return getBlogPosts(lang);

  try {
    const res = await api.get<ApiBlogPost[]>('/blogs', { params: { lang } });
    if (!res.data.length) return getBlogPosts(lang);
    return res.data.map((post) => normalizeApiPost(post, lang));
  } catch {
    return getBlogPosts(lang);
  }
}

export async function fetchBlog(slug: string, lang: BlogLanguage): Promise<BlogPost | null> {
  if (!API_ENABLED) return getBlogPostBySlug(slug, lang);

  try {
    const res = await api.get<ApiBlogPost>(`/blogs/${encodeURIComponent(slug)}`, { params: { lang } });
    return normalizeApiPost(res.data, lang);
  } catch {
    return getBlogPostBySlug(slug, lang);
  }
}

export type { BlogLanguage, BlogPost };

