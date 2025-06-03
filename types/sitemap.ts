type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SiteMapVO {
  loc: string;
  lastmod: string;
  changefreq: ChangeFrequency;
  priority: number;
}
