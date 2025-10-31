'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import 'artalk/dist/Artalk.css'

// 扩展Window接口
declare global {
  interface Window {
    artalk?: any
  }
}

export default function ArtalkClient() {
  const pathname = usePathname()
  const { theme } = useTheme()

  // 开发环境不显示
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  useEffect(() => {
    let artalk: any
    const init = async () => {
      try {
        if (typeof window === 'undefined') return

        const server = 'https://comment.golangblog.com'
        const site = '浩瀚星河'
        const el = document.getElementById('comment')
        if (!el) {
          return
        }

        // 先销毁之前的实例
        if (window.artalk) {
          try {
            window.artalk.destroy()
          } catch (e) {
            console.warn('销毁Artalk实例时出错:', e)
          }
          window.artalk = null
        }

        // 清空容器内容
        el.innerHTML = ''

        const Artalk = (await import('artalk')).default
        artalk = Artalk.init({
          el: '#comment',
          pageKey: pathname || '/',
          pageTitle: document.title || pathname || '/',
          pageUrl: window.location.href,
          server,
          site,
          locale: 'zh-CN',
          darkMode: theme === 'dark',
        })

        // 将实例保存到全局
        window.artalk = artalk
      } catch (e) {
        console.error('ArtalkClient 初始化失败', e)
      }
    }

    // 延迟初始化，确保DOM已更新
    const timer = setTimeout(init, 100)

    return () => {
      clearTimeout(timer)
      try {
        if (window.artalk) {
          window.artalk.destroy()
          window.artalk = null
        }
      } catch (e) {
        console.warn('清理Artalk实例时出错:', e)
      }
    }
  }, [pathname, theme])

  return <div id="comment" />
}
