import type { MetadataRoute } from "next";
import { getPostSiteMapAPI } from "@/api/post";
import { getSiteConfigAPI } from "@/api/setting";
import { getDocumentSiteMapAPI } from "@/api/document";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postRes = await getPostSiteMapAPI();
  const documentRes = await getDocumentSiteMapAPI();
  const siteConfig = await getSiteConfigAPI();
  const baseUrl = siteConfig.data.siteUrl || "https://golang.cn";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playground`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
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