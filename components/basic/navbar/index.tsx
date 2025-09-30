'use client'

import { useState, useEffect } from 'react'
import { Link } from '@heroui/react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@/components/basic/svg-icon'

// 自定义更密集、振幅更小、颜色为淡黑色的波浪线样式
const WAVE_UNDERLINE_STYLE = `
.nav-link-active {
  position: relative;
}
.nav-link-active::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 4px;
  background-repeat: repeat-x;
  background-size: 16px 4px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='4' viewBox='0 0 16 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2C2 2 2 0.5 4 0.5C6 0.5 6 3.5 8 3.5C10 3.5 10 0.5 12 0.5C14 0.5 14 2 16 2' stroke='%23909090' stroke-width='1.2' fill='none'/%3E%3C/svg%3E");
  pointer-events: none;
}
`

const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/blog', label: '博客' },
  { href: '/document', label: '文档' },
  { href: '/friends', label: '友链' },
  { href: '/about', label: '关于' },
]

function DesktopNav() {
  const pathname = usePathname()
  const currentPath = pathname.split('/')[1] || '/'

  return (
    <>
      {/* 注入波浪线样式 */}
      <style>{WAVE_UNDERLINE_STYLE}</style>
      <nav className="hidden w-full md:flex items-center justify-end space-x-8">
        {NAV_LINKS.map((item) => {
          const isActive =
            currentPath === item.href.split('/')[1] || (currentPath === '/' && item.href === '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] font-medium ${
                isActive
                  ? 'text-primary nav-link-active'
                  : 'text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'
              }`}
              style={{ position: 'relative' }}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="切换主题"
    >
      {/* 同时渲染两个图标，依赖 html.dark 类控制显示，避免首次客户端插入造成闪烁 */}
      <SunIcon size={18} className="hidden dark:inline text-gray-600 dark:text-gray-300" />
      <MoonIcon size={18} className="inline dark:hidden text-gray-600 dark:text-gray-300" />
    </button>
  )
}

function MobileNav({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed inset-x-0 top-14 z-30 bg-white/95 dark:bg-gray-950 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="flex flex-col space-y-3 px-4 py-3">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClick}
            className="px-2 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <div className="px-2 py-1.5">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 dark:bg-gray-950 backdrop-blur-sm">
      <div className="mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        {/* 左侧：头像 + 品牌（移动端只显示头像） */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://cdn.codepzj.cn/image/20250529174726187.jpeg"
            alt="avatar"
            className="w-7 h-7 rounded-full object-cover"
            loading="lazy"
          />
          <span className="hidden md:block w-24 text-md font-bold text-primary hover:opacity-80">
            浩瀚星河
          </span>
        </Link>

        {/* 桌面导航 */}
        <DesktopNav />

        {/* 右侧操作区 */}
        <div className="flex items-center space-x-2">
          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="菜单"
          >
            {isMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12h16M4 6h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* 主题切换按钮 */}
        <div className="hidden md:block ml-4">
          <ThemeToggle />
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && <MobileNav onClick={() => setIsMenuOpen(false)} />}
    </header>
  )
}
