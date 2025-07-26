'use client'

import { GalleryVerticalEnd } from 'lucide-react'

export function DocTitle({ docTitle }: { docTitle: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <GalleryVerticalEnd className="size-4" />
      </div>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-medium cursor-pointer">{docTitle}</span>
      </div>
    </div>
  )
}
