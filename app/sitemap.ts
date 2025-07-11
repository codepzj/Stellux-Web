import type { MetadataRoute } from "next";
import { getPostSiteMapAPI } from "@/api/post";
import { getSiteConfigAPI } from "@/api/setting";
import { getDocumentSiteMapAPI } from "@/api/document";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postRes = await getPostSiteMapAPI();
  const documentRes = await getDocumentSiteMapAPI();
  const siteConfig = await getSiteConfigAPI();
  const baseUrl = siteConfig.data.siteUrl;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/doc`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const combinedSitemap = [...postRes.data, ...documentRes.data]
    .map((item) => ({
      url: item.loc,
      lastModified: new Date(item.lastmod),
      changeFrequency: item.changefreq,
      priority: item.priority,
    }))
    .sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

  return [...staticPages, ...combinedSitemap];
}
