'use client'

import { useTheme } from 'next-themes'

import Giscus from '@giscus/react'

const Comment = () => {
  const { theme } = useTheme()

  return (
    <div id="comment" className="w-full">
      <Giscus
        repo="codepzj/Stellux-Server"
        repoId="R_kgDOOzDEaw"
        category="Announcements"
        categoryId="DIC_kwDOOzDEa84Cu0Zj"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        lang="zh-CN"
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        loading="lazy"
      />
    </div>
  )
}

export default Comment
