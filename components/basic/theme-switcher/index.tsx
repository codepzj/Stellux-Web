'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SystemIcon, SunIcon, MoonIcon } from '@/components/basic/svg-icon'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="inline-flex items-center gap-1 rounded-full border bg-muted/50 p-1">
      {[
        { key: 'light', icon: <SunIcon size={16} />, label: '浅色模式' },
        { key: 'dark', icon: <MoonIcon size={16} />, label: '深色模式' },
        { key: 'system', icon: <SystemIcon size={16} />, label: '跟随系统模式' },
      ].map((item) => (
        <Button
          key={item.key}
          size="icon"
          variant={theme === item.key ? 'default' : 'ghost'}
          aria-label={item.label}
          className={cn(
            'h-8 w-8 rounded-full',
            !mounted && 'pointer-events-none opacity-60'
          )}
          onClick={() => setTheme(item.key)}
        >
          {item.icon}
        </Button>
      ))}
    </div>
  )
}
