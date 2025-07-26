'use client'

import type { ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextThemesProvider {...themeProps}>
      <HeroUIProvider>
        <ToastProvider
          placement="top-right"
          toastProps={{
            color: 'primary',
            variant: 'flat',
            timeout: 1500,
            classNames: {
              base: 'top-2',
            },
          }}
        />
        {children}
      </HeroUIProvider>
    </NextThemesProvider>
  )
}
