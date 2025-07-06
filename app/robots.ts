import type { MetadataRoute } from "next";
import { getSiteConfigAPI } from "@/api/config";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteConfig = await getSiteConfigAPI();
  const baseUrl = siteConfig.data.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
