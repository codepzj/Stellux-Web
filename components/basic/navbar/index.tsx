'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IconBrandGithub, IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from 'next-themes'

// 公共导航项配置
const NAV_LINKS = [
  {
    href: '/',
    label: '首页',
  },
  {
    href: '/blog',
    label: '博客',
  },
  {
    href: '/document',
    label: '文档',
  },
]

// 桌面端导航渲染
function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center space-x-4 justify-start flex-1 ml-16">
      {NAV_LINKS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium px-1 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

// 移动端导航渲染
function MobileNav({ onClick }: { onClick: () => void }) {
  return (
    <div className="mx-auto mt-2 max-w-2xl rounded-lg dark:bg-gray-950/95 px-2 pt-2 pb-3 space-y-1">
      {NAV_LINKS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className="block px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

// 主题切换按钮
function ThemeToggle({
  theme,
  setTheme,
  mounted,
}: {
  theme: string | undefined
  setTheme: (theme: string) => void
  mounted: boolean
}) {
  if (!mounted) return null
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
      aria-label="切换主题"
    >
      {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 在客户端渲染后再显示主题切换按钮，避免水合不匹配
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="z-40 w-full bg-white dark:bg-gray-950">
      <div className="mx-auto flex h-12 items-center justify-between px-4 mt-2 max-w-3xl rounded-lg shadow-xs bg-white/80 dark:bg-gray-950/80">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">Go中文网</span>
        </Link>

        {/* 桌面导航 */}
        <DesktopNav />

        {/* 右侧操作区 */}
        <div className="flex items-center space-x-2">
          {/* 主题切换按钮 */}
          <ThemeToggle theme={theme} setTheme={setTheme} mounted={mounted} />

          <Link
            href="https://github.com/golang/go"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <IconBrandGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="打开菜单"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <MobileNav onClick={() => setIsMenuOpen(false)} />
      </div>
    </header>
  )
}
