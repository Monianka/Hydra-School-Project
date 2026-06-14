export type BlogLanguage = 'en' | 'pl';

export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  intro: string;
  content: string;
  coverImage: string;
  coverImageWidth?: number;
  coverImageHeight?: number;
  cardImage?: string;
  category: string;
  author: string;
  readingTime: number;
  publishedAt: string;
  seoDescription: string;
  tags: string[];
  sections: BlogSection[];
}
