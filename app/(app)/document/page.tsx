'use client'

import { useEffect, useState } from 'react'
import { getAllPublicDocument } from '@/api/document'
import type { DocumentVO } from '@/types/document'
import { IconAlertCircle, IconBook2, IconChevronRight } from '@tabler/icons-react'
import { Card, CardBody, CardFooter } from '@heroui/card'
import { WikiIcon } from '@/components/basic/svg-icon'
import Image from 'next/image'
import { Spinner } from '@heroui/spinner'
import { Alert } from '@heroui/alert'
import { Button } from '@heroui/button'
import { Spacer } from '@heroui/spacer'
import Link from 'next/link'
import Footer from '@/components/Footer'

// 美化后的 Empty 组件
function Empty({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="relative mb-6">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-200/60 via-blue-100/60 to-blue-300/60 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 blur-lg animate-pulse" />
        <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-gray-900 shadow-lg">
          <IconAlertCircle className="w-12 h-12 text-blue-400 dark:text-blue-300 animate-bounce" />
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-2">{title}</div>
      <div className="text-gray-500 dark:text-gray-400 text-base mb-4">
        这里空空如也，暂时没有任何文档内容。
      </div>
    </div>
  )
}

export default function DocumentPage() {
  const [docList, setDocList] = useState<DocumentVO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await getAllPublicDocument()
      setDocList(res.data || [])
    } catch (error) {
      console.error('获取文档列表失败:', error)
      setError('获取文档列表失败，请稍后再试')
      setDocList([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className="bg-white dark:bg-gray-950 min-h-screen flex items-center">
          <div className="container px-4 py-12 md:px-6 md:py-24 flex flex-col items-center justify-center">
            <Spinner color="primary" label="文档列表加载中" />
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (error) {
    return (
      <>
        <div className="bg-white dark:bg-gray-950 min-h-screen flex items-center">
          <div className="container px-4 py-12 md:px-6 md:py-24 flex flex-col items-center justify-center">
            <Alert
              color="danger"
              title="获取文档列表失败"
              description={
                <>
                  <div>{error}</div>
                  <div className="mt-2">请稍后再试或刷新页面</div>
                  <Button className="mt-6" color="primary" onPress={() => window.location.reload()}>
                    刷新页面
                  </Button>
                </>
              }
              icon={<IconAlertCircle className="w-4 h-4" />}
            />
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl space-y-12">
            <section className="space-y-6">
              {/* 顶部标题美化：增加渐变背景、图标、分割线、动画 */}
              <div className="relative overflow-hidden rounded-2xl mb-8 shadow-sm bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
                <div className="absolute -top-8 -left-8 opacity-10 pointer-events-none select-none">
                  <IconBook2 className="w-40 h-40 text-blue-300 dark:text-gray-700 animate-spin-slow" />
                </div>
                <div className="relative z-10 flex flex-col items-center py-12 px-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 px-5 py-1.5 text-base font-semibold text-blue-700 dark:text-blue-200 shadow">
                    <IconBook2 className="w-5 h-5" />
                    文档
                  </span>
                  <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
                    Go语言中文网文档
                  </h1>
                  <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg mt-3">
                    全面的{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-300">Go语言</span>{' '}
                    学习资料、教程和最佳实践指南
                  </p>
                  <div className="w-24 h-1 mt-6 rounded-full bg-gradient-to-r from-blue-400/60 via-blue-200/60 to-blue-400/60 dark:from-blue-800/60 dark:via-blue-900/60 dark:to-blue-800/60 animate-pulse" />
                </div>
              </div>
              <Spacer y={16} />
              <div className="flex flex-col gap-8">
                {docList.length > 0 ? (
                  docList.map((item) => (
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
                              <div className="relative w-48 h-28 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
                                {item.thumbnail ? (
                                  <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    width={192}
                                    height={108}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
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
                  ))
                ) : (
                  <Empty title="暂无文档" />
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="py-16 md:py-24 lg:py-32"></div>
      <Footer />
    </>
  )
}
