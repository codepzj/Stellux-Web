"use client";

import { useEffect, useState } from "react";
import { getSiteConfigAPI, SiteConfigVO } from "@/api/setting";

export default function Handler() {
  const [siteConfig, setSiteConfig] = useState<SiteConfigVO | null>(null);
  useEffect(() => {
    getSiteConfigAPI().then((res) => {
      setSiteConfig(res.data);
    });
  }, []);
  return null;
}
