import '@/global.css'

import { Providers } from './providers'
import { Metadata } from 'next'

// 布局组件
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh-CN">
      <head>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicon.ico`}
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://cdn-font.hyperos.mi.com/font/css?family=MiSans_VF:VF:Chinese_Simplify,Latin&display=swap"
        />
      </head>
      <body className="min-h-screen bg-background antialiased w-full font-main">
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>{children}</Providers>
      </body>
    </html>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Gopher`,
    description: 'Gopher的个人技术博客,记录Golang学习与开发实践。',
    keywords: 'Go,Gin,GoZero,Kratos,Echo,Redis,Mysql,Pgsql,Mongodb,K8S',
    openGraph: {
      title: `Gopher`,
      description: 'Gopher的个人技术博客,记录Golang学习与开发实践。',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Gopher',
      images: [
        {
          url: `https://cdn.codepzj.cn/image/20250825180716208.png`,
          width: 200,
          height: 200,
          alt: 'Gopher',
        },
      ],
      locale: 'zh-CN',
      type: 'website',
    },
  }
}
