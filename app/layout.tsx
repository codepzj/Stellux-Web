import { getBasicConfigAPI, getSeoConfigAPI } from "@/api/config";
import "@/global.css";
import clsx from "clsx";

import { Providers } from "./providers";
import { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";

// 百度统计
import BaiduStatis from '@/components/BaiduStatis';

// 布局组件
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="zh-CN">
            <head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link
                    rel="stylesheet"
                    href="https://cdn-font.hyperos.mi.com/font/css?family=MiSans_VF:VF:Chinese_Simplify,Latin&display=swap"
                />
                {/* 百度统计 */}
                <BaiduStatis />
            </head>
            <body className={clsx("min-h-screen bg-background antialiased w-full font-main")}>
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="max-w-7xl mx-auto">
                        <SidebarProvider style={{ "--sidebar-width": "272px" } as React.CSSProperties}>
                            <AppSidebar className="sticky top-0" />
                            <SidebarInset>
                                <div className="flex flex-col gap-4 p-0 md:p-4 pt-0">
                                    {children}
                                </div>
                            </SidebarInset>
                        </SidebarProvider>
                    </div>
                </Providers>
            </body>
        </html>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    const [basicConfig, seoConfig] = await Promise.all([getBasicConfigAPI().then(res => res.data), getSeoConfigAPI().then(res => res.data)]);
    return {
        title: `${basicConfig.site_title} - ${basicConfig.site_subtitle}`,
        description: seoConfig.site_description,
        keywords: seoConfig.site_keywords,
        authors: [{ name: seoConfig.site_author }],
        robots: seoConfig.robots,
        openGraph: {
            title: `${basicConfig.site_title} - ${basicConfig.site_subtitle}`,
            description: seoConfig.site_description,
            url: seoConfig.site_url,
            siteName: basicConfig.site_title,
            images: [
                {
                    url: seoConfig.og_image,
                    width: 800,
                    height: 600,
                    alt: basicConfig.site_title,
                },
            ],
            locale: "zh-CN",
            type: seoConfig?.og_type || "website",
        },
        twitter: {
            card: seoConfig?.twitter_card || "summary_large_image",
            title: basicConfig.site_title,
            description: seoConfig.site_description,
            images: [seoConfig.og_image],
        },
    };
}