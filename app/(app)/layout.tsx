'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider style={{ '--sidebar-width': '256px' } as React.CSSProperties}>
      <div className="flex flex-col">
        <Navbar />
        <div
          id="content"
          className={cn(
            'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
            'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
            'sm:transition-[width] sm:duration-200 sm:ease-linear',
            'flex h-svh flex-col',
            'group-data-[scroll-locked=1]/body:h-full',
            'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh',
            'w-full mx-auto max-w-4xl',
            '2xl:mx-auto 2xl:max-w-6xl'
          )}
        >
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}
