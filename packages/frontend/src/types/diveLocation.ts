export type DiveLocationLanguage = 'en' | 'pl';

export interface DiveLocation {
  slug: string;
  name: string;
  area: string;
  websiteUrl: string;
  mapEmbedUrl: string;
  shortDescription: string;
  intro: string;
  description: string[];
  highlights: string[];
  seoDescription: string;
}
