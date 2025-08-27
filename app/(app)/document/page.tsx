'use client'

import { useEffect, useState } from 'react'
import { getAllPublicDocument } from '@/api/document'
import type { DocumentVO } from '@/types/document'
import { Book, ChevronRight } from 'lucide-react'
import { WikiIcon } from '@/components/basic/svg-icon'
import { ErrorPage } from '@/components/basic/error-page'
import { Image, Card, CardBody, CardFooter, Link, Skeleton, Spacer } from '@heroui/react'

export default function DocumentPage() {
  const [docList, setDocList] = useState<DocumentVO[]>([])
  const [loading, setLoading] = useState(true)
  const skeletonCount = docList.length > 0 ? docList.length : 3

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await getAllPublicDocument()
      setDocList(res.data || [])
    } catch (error) {
      console.error('获取文档列表失败:', error)
      setDocList([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // 如果无数据，直接显示极简空态，避免显示标题与总数
  if (!loading && docList.length === 0) {
    return <ErrorPage title="暂无公开文档" />
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl space-y-12">
            <section className="space-y-6">
              {/* 顶部标题与总数样式与博客列表保持一致 */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
                <div className="flex items-center gap-2">
                  <Book className="w-6 h-6" />
                  <span className="text-xl font-semibold">Docs</span>
                  <span className="text-gray-500 text-sm ml-2">{docList.length} 篇</span>
                </div>
              </div>
              <Spacer y={4} />
              <div className="flex flex-col gap-8">
                {loading
                  ? Array.from({ length: skeletonCount }).map((_, idx) => (
                      <Card
                        key={idx}
                        className="group relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md w-full"
                      >
                        <CardBody className="p-5">
                          <div className="flex gap-4 items-center">
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-6 w-2/3 mb-2" />
                              <Skeleton className="h-4 w-full mb-2" />
                              <Skeleton className="h-4 w-5/6" />
                            </div>
                            <div className="flex-shrink-0 hidden md:block">
                              <Skeleton className="w-48 h-27 rounded-md" />
                            </div>
                          </div>
                        </CardBody>
                        <CardFooter className="flex flex-wrap items-center justify-between px-5 pb-5 pt-0">
                          <div className="flex flex-wrap gap-2">
                            <Skeleton className="h-5 w-12 rounded-full" />
                          </div>
                          <Skeleton className="h-5 w-20" />
                        </CardFooter>
                      </Card>
                    ))
                  : docList.map((item) => (
                      <Card
                        key={item.id}
                        className="group relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md w-full"
                      >
                        <CardBody className="p-5">
                          <div className="flex gap-4 items-center">
                            <div className="flex-1 space-y-2">
                              <h2 className="text-xl font-bold line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                <Link href={`/document/${item.alias}`}>{item.title}</Link>
                              </h2>
                              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 hidden md:block">
                              <Link href={`/document/${item.alias}`} className="block">
                                <div className="relative w-48 h-27 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-md">
                                  {item.thumbnail ? (
                                    <Image
                                      width={192}
                                      height={108}
                                      src={item.thumbnail}
                                      alt={item.title}
                                      className="object-cover w-full h-full"
                                      loading="lazy"
                                      isZoomed
                                    />
                                  ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="rounded-full bg-white/90 dark:bg-gray-700/90 p-3">
                                        <WikiIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </Link>
                            </div>
                          </div>
                        </CardBody>
                        <CardFooter className="flex flex-wrap items-center justify-between px-5 pb-5 pt-0">
                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800/60 dark:text-gray-200">
                              文档
                            </span>
                          </div>
                          <Link
                            href={`/document/${item.alias}`}
                            className="inline-flex items-center text-sm font-medium text-primary-600 transition-all duration-300 hover:text-primary-800 hover:translate-x-1 dark:text-primary-400 dark:hover:text-primary-200"
                          >
                            查看文档
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
