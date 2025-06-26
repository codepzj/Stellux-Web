"use client"

import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { usePathname } from "next/navigation"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const pathname = usePathname()

  React.useEffect(() => {
    console.log(`%c 知识库 %c Stellux `,
      'background: #35495e; padding: 4px; border-radius: 3px 0 0 3px; color: #fff',
      'background: #539dfd; padding: 4px; border-radius: 0 3px 3px 0; color: #fff',
    );
    console.log("🚀 欢迎使用 Stellux 知识库")
    console.log("🎉 开源地址: https://github.com/StelluxWiki/Stellux")
    console.log("🏕 作者主页: https://gowiki.site")
    console.log("🌟 觉得好用的话记得点个 Star 哦 🙏")

    // 每次路径变化后滚动到顶部
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname])

  return (
    <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
  )
}
