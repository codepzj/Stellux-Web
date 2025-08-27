'use client'

import { useState, useEffect } from 'react'
import { Link } from '@heroui/react'

import { Calendar, UserRoundPen, Tag, ChevronRight, Book } from 'lucide-react'
import { getPostListAPI } from '@/api/post'
import { formatDate, formatRelativeTime } from '@/utils/date'
import type { PostVO } from '@/types/post'
import { Pagination, Spacer, Card, CardBody, CardFooter, Skeleton, Image } from '@heroui/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { ErrorPage } from '@/components/basic/error-page'
import { Search } from './search'
import { Provider } from './provider'

export default function BlogList() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const router = useRouter()
  const pageSize = 10

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

  useEffect(() => {
    setLoading(true)
    async function fetchPosts() {
      try {
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
        // 回到顶部
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
      } catch (error) {
        console.error(error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [currentPage, pageSize])

  const handlePageChange = (page: number) => {
    setLoading(true)
    router.push(`/blog?page=${page}`)
  }

  // 计算骨架屏的数量，优先用上一次的posts数量，否则用pageSize
  const skeletonCount = posts.length > 0 ? posts.length : pageSize

  // 如果无数据，直接显示极简空态，避免显示标题与总数
  if (!loading && posts.length === 0) {
    return <ErrorPage title="暂无博客内容" />
  }

  return (
    <>
      <Provider>
        <div className="bg-white dark:bg-gray-950 min-h-screen">
          <div className="container px-4 py-12 md:px-6 md:py-24">
            <div className="mx-auto max-w-5xl space-y-12">
              <section className="space-y-6">
                {/* 博客标题、总数和搜索框同一行 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
                  <div className="flex items-center gap-2">
                    <Book className="w-6 h-6" />
                    <span className="text-xl font-semibold">Posts</span>
                    <span className="text-gray-500 text-sm ml-2">{pagination.total_count} 篇</span>
                  </div>
                  <Search className="md:w-36" />
                </div>
                <Spacer y={4} />
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
                              <Skeleton className="w-48 h-27 rounded-md" />
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
                    <ErrorPage title="暂无博客内容" />
                  ) : (
                    posts.map((post) => (
                      <Card
                        key={post.id}
                        className="group relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md w-full"
                      >
                        <CardBody className="p-5">
                          <div className="flex gap-4 ">
                            <div className="flex-1 space-y-2">
                              <h2 className="text-xl font-bold line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                <Link href={`/blog/${post.alias}`}>{post.title}</Link>
                              </h2>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                  <time
                                    dateTime={post.created_at}
                                    title={formatDate(post.created_at)}
                                  >
                                    {formatRelativeTime(post.created_at)}
                                  </time>
                                </div>
                                <div className="flex items-center gap-1">
                                  <UserRoundPen className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                  <span>{post.author}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                {post.description}
                              </p>
                            </div>
                            <div className="flex-shrink-0 hidden md:block">
                              <Link href={`/blog/${post.alias}`} className="block">
                                <div className="relative w-48 h-27 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-md">
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
                                <div
                                  key={i}
                                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium dark:bg-gray-800/60 dark:text-gray-200"
                                >
                                  <Tag className="mr-1 h-3 w-3" />
                                  {tag}
                                </div>
                              ))}
                          </div>
                          <Link
                            href={`/blog/${post.alias}`}
                            className="inline-flex items-center text-sm font-medium text-primary-600 transition-all duration-300 hover:text-primary-800 hover:translate-x-1 dark:text-primary-400 dark:hover:text-primary-200"
                          >
                            阅读更多
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </div>
                <Spacer y={8} />
                {pagination.total_page > 1 && (
                  <div className="flex justify-end">
                    <Pagination
                      total={loading ? pagination.total_page : pagination.total_page}
                      page={loading ? pagination.page_no : pagination.page_no}
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
