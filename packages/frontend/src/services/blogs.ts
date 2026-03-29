import api from './api';

const API_ENABLED = Boolean(process.env.REACT_APP_API_URL);

export type Lang = 'en' | 'pl';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  coverImage?: string | null;
  tags?: string[];
  author?: string;
  published?: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export async function fetchBlogs(lang: Lang): Promise<BlogPost[]> {
  if (!API_ENABLED) return [];
  const res = await api.get<BlogPost[]>('/blogs', { params: { lang } });
  return res.data;
}

export async function fetchBlog(slug: string, lang: Lang): Promise<BlogPost | null> {
  if (!API_ENABLED) return null;
  const res = await api.get<BlogPost>(`/blogs/${encodeURIComponent(slug)}`, { params: { lang } });
  return res.data;
}

