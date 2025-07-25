import "@/global.css";

import { Providers } from "./providers";
import { Metadata } from "next";
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            {children}
            <Toaster position="top-right" richColors duration={1500} />
        </Providers>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Go语言中文网 - 最全面的Go语言中文学习平台`,
    description: "最全面的Go语言中文学习平台,提供高质量的中文教程和社区支持,助力开发者快速掌握Go语言。",
    keywords: "Go,Golang,Go语言,Go编程,Go教程,Go开发,Go语言中文网",
    openGraph: {
      title: `Go语言中文网 - 最全面的Go语言中文学习平台`,
      description: "最全面的Go语言中文学习平台,提供高质量的中文教程和社区支持,助力开发者快速掌握Go语言。",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: "Go语言中文网",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "Go语言中文网",
        },
      ],
      locale: "zh-CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Go语言中文网",
      description: "最全面的Go语言中文学习平台,提供高质量的中文教程和社区支持,助力开发者快速掌握Go语言。",
    },
  };
}