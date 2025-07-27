'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  IconCalendar,
  IconUser,
  IconTag,
  IconChevronRight,
  IconAlertCircle,
  IconBook2,
} from '@tabler/icons-react'
import { getPostListAPI } from '@/api/post'
import { formatDate, formatRelativeTime } from '@/utils/date'
import { useSearchParams, useRouter } from 'next/navigation'
import { PostVO } from '@/types/post'
import { Pagination } from '@heroui/pagination'
import { Spacer } from '@heroui/spacer'
import { Search } from './search'
import { Provider } from './provider'
import { Card, CardBody, CardFooter } from '@heroui/card'
import { Button } from '@heroui/button'
import { Alert } from '@heroui/alert'
import { Spinner } from '@heroui/spinner'
import Footer from '@/components/Footer'
import Image from 'next/image'

// 美化后的 Empty 组件（不显示"发布博客"按钮）
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
        这里空空如也，暂时没有任何博客内容。
      </div>
    </div>
  )
}

export default function BlogList() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentPage = Number(searchParams.get('page')) || 1
  const pageSize = 6

  const [posts, setPosts] = useState<PostVO[]>([])
  const [pagination, setPagination] = useState<{
    total_page: number
    page_no: number
    total_count: number
  }>({
    total_page: 1,
    page_no: 1,
    total_count: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)

        const response = await getPostListAPI({
          page_no: currentPage,
          page_size: pageSize,
        })

        if (response && response.data) {
          setPosts(response.data.list || [])
          setPagination({
            total_page: response.data.total_page || 1,
            page_no: response.data.page_no || 1,
            total_count: response.data.total_count || 0,
          })
        } else {
          throw new Error('获取文章列表失败')
        }
      } catch (error) {
        console.error(error)
        setError('获取文章列表失败，请稍后再试')
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [currentPage, pageSize])

  const handlePageChange = (page: number) => {
    router.push(`/blog?page=${page}`)
  }

  if (loading) {
    return (
      <>
        <div className="bg-white dark:bg-gray-950 min-h-screen flex items-center">
          <div className="container px-4 py-12 md:px-6 md:py-24 flex flex-col items-center justify-center">
            <Spinner color="primary" label="文章列表加载中" />
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
              title="获取文章列表失败"
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
      <Provider>
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
                      博客
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
                      Go语言中文网博客
                    </h1>
                    <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg mt-3">
                      分享{' '}
                      <span className="font-semibold text-blue-600 dark:text-blue-300">Go语言</span>{' '}
                      的最新动态、技术教程、最佳实践和社区新闻
                    </p>
                    <div className="w-24 h-1 mt-6 rounded-full bg-gradient-to-r from-blue-400/60 via-blue-200/60 to-blue-400/60 dark:from-blue-800/60 dark:via-blue-900/60 dark:to-blue-800/60 animate-pulse" />
                  </div>
                </div>
                <Spacer y={4} />
                <div className="flex justify-end">
                  <Search className="w-40" placeholder="搜索博客" />
                </div>
                <Spacer y={16} />
                <div className="flex flex-col gap-8">
                  {posts.length > 0 ? (
                    posts.map((post) => (
                      <Card
                        key={post.id}
                        className="group relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md w-full"
                      >
                        <CardBody className="p-5">
                          <div className="flex gap-4">
                            <div className="flex-1 space-y-2">
                              <h2 className="text-xl font-bold line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                <Link href={`/blog/${post.alias}`}>{post.title}</Link>
                              </h2>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                  <IconCalendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                  <time
                                    dateTime={post.created_at}
                                    title={formatDate(post.created_at)}
                                  >
                                    {formatRelativeTime(post.created_at)}
                                  </time>
                                </div>
                                <div className="flex items-center gap-1">
                                  <IconUser className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                  <span>{post.author}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                {post.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 hidden md:block">
                              <Link href={`/blog/${post.alias}`} className="block">
                                <div className="relative w-48 h-28 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg">
                                  {post.thumbnail ? (
                                    <Image
                                      width={192}
                                      height={108}
                                      src={post.thumbnail}
                                      alt={post.title}
                                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
                                    />
                                  ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="rounded-full bg-white/90 dark:bg-gray-700/90 p-3">
                                        <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                                          Go
                                        </span>
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
                            {post.tags &&
                              post.tags.slice(0, 2).map((tag, i) => (
                                <Link
                                  key={i}
                                  href={`/tag/${tag}`}
                                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                >
                                  <IconTag className="mr-1 h-3 w-3" />
                                  {tag}
                                </Link>
                              ))}
                          </div>
                          <Link
                            href={`/blog/${post.alias}`}
                            className="inline-flex items-center text-sm font-medium text-primary-600 transition-all duration-300 hover:text-primary-800 hover:translate-x-1 dark:text-primary-400 dark:hover:text-primary-200"
                          >
                            阅读更多
                            <IconChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <Empty title="暂无文章" />
                  )}
                </div>
                <Spacer y={16} />
                {pagination.total_page > 1 && (
                  <div className="flex justify-end">
                    <Pagination
                      total={pagination.total_page}
                      page={pagination.page_no}
                      onChange={handlePageChange}
                    />
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </Provider>
      <Spacer y={80} />
      <Footer />
    </>
  )
}
