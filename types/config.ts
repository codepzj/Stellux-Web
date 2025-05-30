export interface BasicConfigVO {
  site_title: string;
  site_subtitle: string;
  site_favicon: string;
};

export type OgType = "website" | "article" | "book" | "profile";
export type TwitterCard = "summary" | "summary_large_image" | "app" | "player";

export interface SeoConfigVO {
  site_author: string;
  site_url: string;
  site_description: string;
  site_keywords: string;
  robots: string;
  og_image: string;
  og_type: OgType;
  twitter_card: TwitterCard;
  twitter_site: string;
};

export interface BlogConfigVO {
  blog_avatar: string;
  blog_title: string;
  blog_subtitle: string;
  blog_welcome: string;
  blog_motto: string;
};