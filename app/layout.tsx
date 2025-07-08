import "@/global.css";

import { getSiteConfigAPI } from "@/api/setting";

import { Providers } from "./providers";
import { Metadata } from "next";
import Handler from "@/components/core/handler";
import { Toaster } from "@/components/ui/sonner"; // 全局消息组件

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
      </head>
      <body className="min-h-screen bg-background antialiased w-full font-main">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Handler />
          <div className="mx-auto px-4">{children}</div>
          <Toaster position="top-right" richColors duration={1500} />
        </Providers>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const basicConfig = await getSiteConfigAPI().then((res) => res.data);
  return {
    title: `${basicConfig.siteTitle} - ${basicConfig.siteSubtitle}`,
    description: basicConfig.siteSubtitle,
    keywords: basicConfig.siteKeywords,
    openGraph: {
      title: `${basicConfig.siteTitle} - ${basicConfig.siteSubtitle}`,
      description: basicConfig.siteSubtitle,
      url: "https://www.hyperos.com",
      siteName: basicConfig.siteTitle,
      images: [
        {
          url: basicConfig.siteAvatar,
          width: 800,
          height: 600,
          alt: basicConfig.siteTitle,
        },
      ],
      locale: "zh-CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: basicConfig.siteTitle,
      description: basicConfig.siteSubtitle,
    },
  };
}
