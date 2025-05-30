"use client"

import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { HeroUIProvider } from "@heroui/system"
import { useRouter, usePathname } from "next/navigation"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()
  const pathname = usePathname()

  React.useEffect(() => {
    // 每次路径变化后滚动到顶部
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  )
}
