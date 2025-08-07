'use client'

import { useEffect, useState } from 'react'
import { getAllPublicDocument } from '@/api/document'
import type { DocumentVO } from '@/types/document'
import { IconBook2, IconChevronRight } from '@tabler/icons-react'
import { Card, CardBody, CardFooter } from '@heroui/card'
import { WikiIcon } from '@/components/basic/svg-icon'
import { Image } from '@heroui/image'
import { Spacer } from '@heroui/spacer'
import Link from 'next/link'
import { Skeleton } from '@heroui/skeleton'

export default function DocumentPage() {
  const [docList, setDocList] = useState<DocumentVO[]>([])

  const fetchData = async () => {
    try {
      const res = await getAllPublicDocument()
      setDocList(res.data || [])
    } catch (error) {
      console.error('获取文档列表失败:', error)
      setDocList([])
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl space-y-12">
            <section className="space-y-6">
              {/* 顶部标题简约版 */}
              <div className="flex flex-col items-center justify-center mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <IconBook2 className="w-7 h-7 text-blue-500 dark:text-blue-300" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    Go语言中文网文档
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-base">
                  共 {docList.length} 篇文档
                </div>
              </div>
              <Spacer y={16} />
              <div className="flex flex-col gap-8">
                {docList.length === 0
                  ? Array.from({ length: 3 }).map((_, idx) => (
                      <Card
                        key={idx}
                        className="group relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md w-full"
                      >
                        <CardBody className="p-5">
                          <div className="flex gap-4">
                            <div className="flex-1 space-y-2">
                              <Skeleton className="h-6 w-2/3 mb-2" />
                              <Skeleton className="h-4 w-full mb-2" />
                              <Skeleton className="h-4 w-5/6" />
                            </div>
                            <div className="flex-shrink-0 hidden md:block">
                              <Skeleton className="w-48 h-28 rounded-sm" />
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
                          <div className="flex gap-4">
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
                                <div className="relative w-48 h-28 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-sm">
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
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                              文档
                            </span>
                          </div>
                          <Link
                            href={`/document/${item.alias}`}
                            className="inline-flex items-center text-sm font-medium text-primary-600 transition-all duration-300 hover:text-primary-800 hover:translate-x-1 dark:text-primary-400 dark:hover:text-primary-200"
                          >
                            查看文档
                            <IconChevronRight className="ml-1 h-4 w-4" />
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
