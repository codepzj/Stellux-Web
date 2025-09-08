'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import 'artalk/dist/Artalk.css'

export default function ArtalkClient() {
  const pathname = usePathname()

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
        const Artalk = (await import('artalk')).default
        artalk = Artalk.init({
          el: '#comment',
          pageKey: pathname || '/',
          pageTitle: document.title || pathname || '/',
          pageUrl: window.location.href,
          server,
          site,
          locale: 'zh-CN',
        })
      } catch (e) {
        console.error('ArtalkClient 初始化失败', e)
      }
    }
    init()
    return () => {
      try {
        artalk?.destroy?.()
      } catch {}
    }
  }, [pathname])

  return <div id="comment" />
}
