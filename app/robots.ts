import type { MetadataRoute } from "next";
import { getSiteConfigAPI } from "@/api/setting";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteConfig = await getSiteConfigAPI();
  const baseUrl = siteConfig.data.siteUrl || "https://golang.cn";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}