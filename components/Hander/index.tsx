'use client'

import { useEffect, useState } from "react";
import { getSiteConfigAPI, SiteConfigVO } from "@/api/config";

export default function Handler() {
    const [siteConfig, setSiteConfig] = useState<SiteConfigVO | null>(null);
    useEffect(() => {
        getSiteConfigAPI().then((res) => {
            setSiteConfig(res.data);
        })
    }, [])
    return null
}