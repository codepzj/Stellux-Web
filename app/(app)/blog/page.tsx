"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconCalendar, IconUser, IconTag, IconChevronRight, IconLoader2 } from "@tabler/icons-react";
import { getPostListAPI } from "@/api/post";
import { formatDate, formatRelativeTime } from "@/utils/date";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { PostVO } from "@/types/post";

export default function PostListPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = 6;
  
  const [posts, setPosts] = useState<PostVO[]>([]);
  const [pagination, setPagination] = useState<{
    total_page: number;
    page_no: number;
    total_count: number;
  }>({
    total_page: 1,
    page_no: 1,
    total_count: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        
        // 从API获取数据
        const response = await getPostListAPI({
          page_no: currentPage,
          page_size: pageSize,
        });
        
        if (response && response.data) {
          console.log("API响应:", response.data); // 调试输出
          setPosts(response.data.list || []);
          setPagination({
            total_page: response.data.total_page || 1,
            page_no: response.data.page_no || 1,
            total_count: response.data.total_count || 0
          });
        } else {
          throw new Error("获取文章列表失败");
        }
      } catch (err) {
        console.error("获取博客文章失败:", err);
        setError("获取文章列表失败，请稍后再试");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    router.push(`/blog?page=${page}`);
  };

  // 处理图片加载错误
  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({
      ...prev,
      [postId]: true
    }));
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl flex flex-col items-center justify-center py-20">
            <IconLoader2 className="h-10 w-10 animate-spin text-blue-600 dark:text-blue-400" />
            <p className="mt-4 text-gray-600 dark:text-gray-400">正在加载文章列表...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <div className="container px-4 py-12 md:px-6 md:py-24">
          <div className="mx-auto max-w-5xl flex flex-col items-center justify-center py-20 text-center">
            <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {error}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              请稍后再试或刷新页面
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              刷新页面
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <section className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                博客
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Go语言中文网博客</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 text-lg">
                分享Go语言的最新动态、技术教程、最佳实践和社区新闻
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <article key={post.id} className="group overflow-hidden rounded-lg border dark:border-gray-800 transition-all hover:shadow-md">
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {post.thumbnail && !imageErrors[post.id] ? (
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                            onError={() => handleImageError(post.id)}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-blue-50 dark:bg-blue-900/20">
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Go</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold line-clamp-2">
                          <Link href={`/blog/${post.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                            {post.title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <IconCalendar className="h-4 w-4" />
                            <time dateTime={post.created_at} title={formatDate(post.created_at)}>
                              {formatRelativeTime(post.created_at)}
                            </time>
                          </div>
                          <div className="flex items-center gap-1">
                            <IconUser className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-500 dark:text-gray-400 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="mt-6 flex flex-wrap items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags && post.tags.slice(0, 3).map((tag, i) => (
                            <Link
                              key={i}
                              href={`/tag/${tag}`}
                              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                              <IconTag className="mr-1 h-3 w-3" />
                              {tag}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                        >
                          阅读更多
                          <IconChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-2 flex h-60 items-center justify-center rounded-lg border dark:border-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">暂无文章</p>
                </div>
              )}
            </div>
            
            {/* 分页组件 - 确保显示 */}
            {pagination && pagination.total_page > 1 && (
              <div className="flex justify-center pt-8">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    共 {pagination.total_count} 篇文章，当前第 {pagination.page_no} 页，共 {pagination.total_page} 页
                  </p>
                </div>
              </div>
            )}
            
            {pagination && pagination.total_page > 1 && (
              <div className="flex justify-center">
                <nav className="flex flex-wrap items-center gap-2">
                  {pagination.page_no > 1 && (
                    <button
                      onClick={() => handlePageChange(pagination.page_no - 1)}
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      上一页
                    </button>
                  )}
                  
                  {Array.from({ length: Math.min(5, pagination.total_page) }, (_, i) => {
                    // 计算要显示的页码
                    let pageNum;
                    if (pagination.total_page <= 5) {
                      // 如果总页数小于等于5，直接显示1到total_page
                      pageNum = i + 1;
                    } else if (pagination.page_no <= 3) {
                      // 如果当前页在前3页，显示1-5
                      pageNum = i + 1;
                    } else if (pagination.page_no >= pagination.total_page - 2) {
                      // 如果当前页在后3页，显示最后5页
                      pageNum = pagination.total_page - 4 + i;
                    } else {
                      // 否则显示当前页及其前后2页
                      pageNum = pagination.page_no - 2 + i;
                    }
                    
                    return (
                      <button
                        key={i}
                        onClick={() => handlePageChange(pageNum)}
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium ${
                          pagination.page_no === pageNum
                            ? "bg-blue-600 text-white"
                            : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  {pagination.page_no < pagination.total_page && (
                    <button
                      onClick={() => handlePageChange(pagination.page_no + 1)}
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      下一页
                      <IconChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  )}
                </nav>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}