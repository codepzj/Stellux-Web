import type { MetadataRoute } from "next";
import { getSeoConfigAPI } from "@/api/config";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const seoConfig = await getSeoConfigAPI();
  const baseUrl = seoConfig.data.site_url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
