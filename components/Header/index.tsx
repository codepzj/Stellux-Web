'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CommandMenu } from './search-menu'
import { BlogConfigVO } from '@/types/config'
import { getBlogConfigAPI } from '@/api/config'

const navs = [
  {
    label: '首页',
    path: '/',
  },
  {
    label: '文档',
    path: '/doc',
  },
  {
    label: '关于',
    path: '/about',
  },
]

export default function Header() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
  const [blogConfig, setBlogConfig] = useState<BlogConfigVO | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogConfigAPI()
      setBlogConfig(res.data)
    }
    fetchData()
  }, [])

  return (
    <header className="h-[4.5em] w-full flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Avatar className="rounded-lg">
          <AvatarImage
            className="rounded-lg"
            src={blogConfig?.blog_avatar}
            alt="site logo"
          />
          <AvatarFallback>
            {blogConfig?.blog_title?.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="text-default-600">{blogConfig?.blog_title}</span>
      </div>
      <div className="max-w-6xl absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-between bg-muted/80 hover:shadow px-4 py-2 rounded-2xl">
        <nav className="flex items-center space-x-8 text-sm">
          {navs.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={classNames(
                "flex items-center space-x-1 text-default-500 hover:text-default-600",
                {
                  "font-medium text-default-600": isActive(nav.path),
                }
              )}
            >
              <span>{nav.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <CommandMenu />
      </div>
    </header>
  );
}
