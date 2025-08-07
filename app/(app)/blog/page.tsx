'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconCalendar, IconUser, IconTag, IconChevronRight, IconBook2 } from '@tabler/icons-react'
import { getPostListAPI } from '@/api/post'
import { formatDate, formatRelativeTime } from '@/utils/date'
import { useSearchParams, useRouter } from 'next/navigation'
import { PostVO } from '@/types/post'
import { Pagination } from '@heroui/pagination'
import { Spacer } from '@heroui/spacer'
import { Search } from './search'
import { Provider } from './provider'
import { Card, CardBody, CardFooter } from '@heroui/card'
import { Image } from '@heroui/image'
import { Skeleton } from '@heroui/skeleton'

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
  const [loading, setLoading] = useState<boolean>(true)
  // 用于防止多次快速切换分页导致的异步竞态
  const fetchIdRef = useRef(0)
  // 记录上一次的posts和pagination用于骨架屏期间展示
  const [prevPosts, setPrevPosts] = useState<PostVO[]>([])
  const [prevPagination, setPrevPagination] = useState<{
    total_page: number
    page_no: number
    total_count: number
  }>({
    total_page: 1,
    page_no: 1,
    total_count: 0,
  })

  // 新增：用于分页切换后2秒内平滑滚动到顶部
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    // 组件卸载时清理定时器
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    let isMounted = true
    const fetchId = ++fetchIdRef.current
    setLoading(true)
    async function fetchPosts() {
      try {
        const response = await getPostListAPI({
          page_no: currentPage,
          page_size: pageSize,
        })

        if (isMounted && fetchId === fetchIdRef.current) {
          if (response && response.data) {
            setPosts(response.data.list || [])
            setPagination({
              total_page: response.data.total_page || 1,
              page_no: response.data.page_no || 1,
              total_count: response.data.total_count || 0,
            })
            setPrevPosts(response.data.list || [])
            setPrevPagination({
              total_page: response.data.total_page || 1,
              page_no: response.data.page_no || 1,
              total_count: response.data.total_count || 0,
            })
          } else {
            throw new Error('获取文章列表失败')
          }
        }
      } catch (error) {
        if (isMounted && fetchId === fetchIdRef.current) {
          console.error(error)
          setPosts([])
        }
      } finally {
        if (isMounted && fetchId === fetchIdRef.current) {
          setLoading(false)
        }
      }
    }

    fetchPosts()
    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize])

  const handlePageChange = (page: number) => {
    // 切换分页时立即显示骨架屏，但内容区保持高度不跳动
    setLoading(true)
    router.push(`/blog?page=${page}`)

    // 2秒后平滑滚动到顶部
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    scrollTimeoutRef.current = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 500)
  }

  // 计算骨架屏的数量，优先用上一次的posts数量，否则用pageSize
  const skeletonCount = prevPosts.length > 0 ? prevPosts.length : pageSize

  return (
    <>
      <Provider>
        <div className="bg-white dark:bg-gray-950 min-h-screen">
          <div className="container px-4 py-12 md:px-6 md:py-24">
            <div className="mx-auto max-w-5xl space-y-12">
              <section className="space-y-6">
                {/* 顶部标题简约版，风格与文档页面一致 */}
                <div className="flex flex-col items-center justify-center mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <IconBook2 className="w-7 h-7 text-blue-500 dark:text-blue-300" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      Go语言中文网博客
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-base">
                    共 {loading ? prevPagination.total_count : pagination.total_count} 篇博客
                  </div>
                </div>
                <Spacer y={4} />
                <div className="flex justify-end">
                  <Search className="md:w-40" />
                </div>
                <Spacer y={16} />
                <div className="flex flex-col gap-8 min-h-[600px]">
                  {loading ? (
                    Array.from({ length: skeletonCount }).map((_, idx) => (
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
                            <Skeleton className="h-5 w-12 rounded-full" />
                          </div>
                          <Skeleton className="h-5 w-20" />
                        </CardFooter>
                      </Card>
                    ))
                  ) : posts.length === 0 ? (
                    <div className="text-center text-gray-400 dark:text-gray-500 py-12">
                      暂无博客内容
                    </div>
                  ) : (
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
                                <div className="relative w-48 h-28 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-sm">
                                  {post.thumbnail ? (
                                    <Image
                                      width={192}
                                      height={108}
                                      src={post.thumbnail}
                                      alt={post.title}
                                      className="object-cover w-full h-full"
                                      loading="lazy"
                                      isZoomed
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
                  )}
                </div>
                <Spacer y={8} />
                {(loading ? prevPagination.total_page : pagination.total_page) > 1 && (
                  <div className="flex justify-end">
                    <Pagination
                      total={loading ? prevPagination.total_page : pagination.total_page}
                      page={loading ? prevPagination.page_no : pagination.page_no}
                      onChange={handlePageChange}
                      isDisabled={loading}
                    />
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </Provider>
    </>
  )
}
