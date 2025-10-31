'use client'

import { useState, useEffect, useRef } from 'react'

import { Calendar, Tag, Book, FolderOpen } from 'lucide-react'
import { getPostListAPI } from '@/api/post'
import { formatRelativeTime } from '@/utils/date'
import type { PostVO } from '@/types/post'
import { Pagination, Spacer, Skeleton } from '@heroui/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { ErrorPage } from '@/components/basic/error-page'
import { Search } from './search'
import { Provider } from './provider'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function BlogList() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const tagName = searchParams.get('tag') || ''
  const categoryName = searchParams.get('category') || ''
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
  const loadingRef = useRef<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchPosts() {
      try {
        const response = await getPostListAPI({
          page_no: currentPage,
          page_size: pageSize,
          label_name: tagName,
          category_name: categoryName,
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
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 300)
      } catch (error) {
        console.error(error)
        setPosts([])
      } finally {
        setLoading(false)
        loadingRef.current = false
      }
    }

    fetchPosts()
  }, [currentPage, pageSize, tagName, categoryName])

  const buildUrlParams = (page: number, tag?: string, category?: string) => {
    const params = new URLSearchParams()
    params.set('page', page.toString())
    if (tag) {
      params.set('tag', tag)
    } else if (category) {
      params.set('category', category)
    }
    return params.toString()
  }

  const navigateToPage = (page: number, tag?: string, category?: string) => {
    if (loadingRef.current) return

    loadingRef.current = true
    setLoading(true)
    router.push(`/blog?${buildUrlParams(page, tag, category)}`)
  }

  const handlePageChange = (page: number) => {
    if (tagName) {
      navigateToPage(page, tagName, undefined)
    } else if (categoryName) {
      navigateToPage(page, undefined, categoryName)
    } else {
      navigateToPage(page)
    }
  }

  const handleTagClick = (tag: string) => {
    if (tag === tagName) return
    navigateToPage(1, tag, undefined)
  }

  const handleCategoryClick = (category: string) => {
    if (category === categoryName) return
    navigateToPage(1, undefined, category)
  }

  const skeletonCount = posts.length > 0 ? posts.length : pageSize

  if (!loading && posts.length === 0) {
    return <ErrorPage title="暂无博客内容" />
  }

  return (
    <>
      <Provider>
        <div className="dark:bg-gray-950 min-h-screen">
          <div className="w-full">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
              <div className="max-w-5xl mx-auto space-y-12">
                <section className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Book className="w-6 h-6" />
                      <span className="text-xl font-semibold">Posts</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm ml-2 font-medium">
                        {pagination.total_count} 篇
                      </span>
                    </div>
                    <Search className="md:w-36" />
                  </div>

                  {(tagName || categoryName) && (
                    <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            当前筛选：
                          </span>
                          <div className="flex items-center gap-2">
                            {categoryName && (
                              <Badge
                                variant="secondary"
                                className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                              >
                                <FolderOpen className="h-4 w-4 mr-1" />
                                {categoryName}
                              </Badge>
                            )}
                            {tagName && (
                              <Badge
                                variant="outline"
                                className="text-sm text-gray-700 dark:text-gray-300"
                              >
                                <Tag className="h-4 w-4 mr-1" />
                                {tagName}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            if (!tagName && !categoryName) return
                            navigateToPage(1)
                          }}
                          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 font-medium"
                        >
                          清除筛选
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-4 min-h-[600px]">
                    {loading ? (
                      Array.from({ length: skeletonCount }).map((_, idx) => (
                        <Card
                          key={idx}
                          className="border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/90 dark:bg-gray-900/70 p-4 rounded-lg"
                        >
                          <div className="flex items-stretch gap-4 min-h-[120px]">
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                              <div className="space-y-2">
                                <Skeleton className="h-5 w-3/4" />
                                <Skeleton className="h-5 w-5/6" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                              </div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <Skeleton className="h-5 w-16 rounded-full" />
                                <Skeleton className="h-5 w-12 rounded-full" />
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <div className="hidden md:block w-48 h-27 mb-3">
                                <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
                                  <Skeleton className="w-full h-full rounded-md" />
                                </AspectRatio>
                              </div>
                              <div>
                                <Skeleton className="h-5 w-16 rounded-full" />
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))
                    ) : posts.length === 0 ? (
                      <ErrorPage title="暂无博客内容" />
                    ) : (
                      posts.map((post) => (
                        <Card
                          key={post.id}
                      className="border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/90 dark:bg-gray-900/70 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/65 cursor-pointer group rounded-lg"
                          onClick={() => router.push(`/blog/${post.alias}`)}
                        >
                          <CardContent className="p-0">
                            <div className="flex items-stretch gap-4 min-h-[120px]">
                              <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div>
                                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-1 mb-2 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-200">
                                    {post.title}
                                  </h3>

                                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-3">
                                    {post.description}
                                  </p>
                                </div>

                                <div className="flex items-center gap-2 flex-wrap">
                                  {post.category && (
                                    <Badge
                                      variant="secondary"
                                      className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleCategoryClick(post.category)
                                      }}
                                    >
                                      <FolderOpen className="h-3 w-3 mr-1" />
                                      {post.category}
                                    </Badge>
                                  )}
                                  {post.tags?.slice(0, 2).map((tag, i) => (
                                    <Badge
                                      key={i}
                                      variant="outline"
                                      className="text-xs hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleTagClick(tag)
                                      }}
                                    >
                                      <Tag className="h-3 w-3 mr-1" />
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex flex-col items-end justify-between">
                                <div className="hidden md:block w-48 h-27 mb-3">
                                  <AspectRatio
                                    ratio={16 / 9}
                                    className="overflow-hidden rounded-md"
                                  >
                                    {post.thumbnail ? (
                                      <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                      />
                                    ) : (
                                      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                        <Book className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                                      </div>
                                    )}
                                  </AspectRatio>
                                </div>

                                <div>
                                  <Badge
                                    variant="outline"
                                    className="text-xs text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                                  >
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {formatRelativeTime(post.created_at)}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
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
        </div>
      </Provider>
    </>
  )
}
