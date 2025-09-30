'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/basic/navbar'
import Footer from '@/components/basic/footer'
import { BookOpen, FileText, Users, Coffee, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getAllPublishPostAPI } from '@/api/post'
import { getAllPublicDocument } from '@/api/document'
import type { PostVO } from '@/types/post'
import type { DocumentVO } from '@/types/document'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Skeleton } from '@heroui/react'
import { formatRelativeTime } from '@/utils/date'

export default function Page() {
  const router = useRouter()
  const [posts, setPosts] = useState<PostVO[]>([])
  const [docs, setDocs] = useState<DocumentVO[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const [p, d] = await Promise.all([getAllPublishPostAPI(), getAllPublicDocument()])
        setPosts((p.data || []).slice(0, 3))
        setDocs((d.data || []).slice(0, 3))
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      {/* 背景图层 */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-15" />

      <Navbar />
      <main className="flex-1 px-6">
        <div className="w-full max-w-6xl mx-auto py-10 space-y-10">
          {/* Hero */}
          <section className="text-center space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              一个程序员的碎碎念
            </h1>
            <p className="text-sm md:text-[15px] text-gray-800 max-w-2xl mx-auto">
              偶尔写点技术，偶尔聊聊生活，偶尔分享一些踩坑经历
            </p>
            {/* 改为移动端两列按钮网格，避免单个按钮被挤到下一行 */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => router.push('/blog')}
                className="flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" /> 博客
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/document')}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" /> 文档
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/friends')}
                className="flex items-center gap-2"
              >
                <Users className="w-4 h-4" /> 友链
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/about')}
                className="flex items-center gap-2"
              >
                <Coffee className="w-4 h-4" /> 关于
              </Button>
            </div>
          </section>

          {/* 最近发布 - 博客 */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                最近发布
              </h2>
              <Button
                variant="ghost"
                onClick={() => router.push('/blog')}
                className="text-gray-600 dark:text-gray-300 px-2"
              >
                查看更多 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <Card
                      key={i}
                      className="border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg"
                    >
                      {/* 骨架屏结构与实际卡片一致，统一最小高度 */}
                      <div className="flex items-stretch gap-4 min-h-[120px]">
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div className="space-y-2">
                            <Skeleton className="h-5 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-5 w-16 rounded-full" />
                            <Skeleton className="h-5 w-20 rounded-full" />
                          </div>
                        </div>
                        <div className="hidden md:block w-28">
                          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
                            <Skeleton className="w-full h-full rounded-md" />
                          </AspectRatio>
                        </div>
                      </div>
                    </Card>
                  ))
                : posts.map((post) => (
                    <Card
                      key={post.id}
                      className="border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg cursor-pointer"
                      onClick={() => router.push(`/blog/${post.alias}`)}
                    >
                      <div className="flex items-stretch gap-4 min-h-[120px]">
                        {/* 左侧内容：固定底部信息 */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 line-clamp-2 mb-1">
                              {post.title}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                              {post.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            {post.category && (
                              <Badge variant="secondary" className="text-xxs md:text-xs">
                                {post.category}
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xxs md:text-xs">
                              {formatRelativeTime(post.created_at)}
                            </Badge>
                          </div>
                        </div>
                        <div className="hidden md:block w-28">
                          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
                            {post.thumbnail ? (
                              <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-100 dark:bg-gray-800" />
                            )}
                          </AspectRatio>
                        </div>
                      </div>
                    </Card>
                  ))}
            </div>
          </section>

          {/* 最近文档 */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                最近文档
              </h2>
              <Button
                variant="ghost"
                onClick={() => router.push('/document')}
                className="text-gray-600 dark:text-gray-300 px-2"
              >
                查看更多 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <Card
                      key={i}
                      className="border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg"
                    >
                      <div className="flex items-stretch gap-4 min-h-[120px]">
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div className="space-y-2">
                            <Skeleton className="h-5 w-2/3" />
                            <Skeleton className="h-4 w-5/6" />
                          </div>
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-5 w-16 rounded-full" />
                          </div>
                        </div>
                        <div className="hidden md:block w-28">
                          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
                            <Skeleton className="w-full h-full rounded-md" />
                          </AspectRatio>
                        </div>
                      </div>
                    </Card>
                  ))
                : docs.map((doc) => (
                    <Card
                      key={doc.id}
                      className="border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg cursor-pointer"
                      onClick={() => router.push(`/document/${doc.alias}`)}
                    >
                      <div className="flex items-stretch gap-4 min-h-[120px]">
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 line-clamp-2 mb-1">
                              {doc.title}
                            </h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                              {doc.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xxs md:text-xs">
                              文档
                            </Badge>
                          </div>
                        </div>
                        <div className="hidden md:block w-28">
                          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
                            {doc.thumbnail ? (
                              <img
                                src={doc.thumbnail}
                                alt={doc.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-100 dark:bg-gray-800" />
                            )}
                          </AspectRatio>
                        </div>
                      </div>
                    </Card>
                  ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
