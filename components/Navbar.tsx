'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IconBrandGithub, IconBrandDiscord, IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from 'next-themes'

// 导航链接数据
const navLinks = [
  { href: '/', label: '首页' },
  { href: '/blog', label: '博客' },
  { href: '/document', label: '文档' }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // 在客户端渲染后再显示主题切换按钮
  useEffect(() => setMounted(true), [])

  // 通用链接样式
  const linkStyle = "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl">G</div>
          <span className="font-bold text-xl">Go语言中文网</span>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center space-x-6 ml-10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center ml-auto space-x-4">
          {/* 主题切换按钮 */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={linkStyle}
              aria-label="切换主题"
            >
              {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
            </button>
          )}

          {/* 社交链接 */}
          <Link href="https://github.com/golang/go" target="_blank" rel="noopener noreferrer" className={linkStyle}>
            <IconBrandGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://groups.google.com/g/golang-nuts" target="_blank" rel="noopener noreferrer" className={linkStyle}>
            <IconBrandDiscord className="h-5 w-5" />
            <span className="sr-only">Go Discussion</span>
          </Link>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
