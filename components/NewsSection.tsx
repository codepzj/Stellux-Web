import Link from "next/link";
import { IconCode } from "@tabler/icons-react";

export default function NewsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              最新资讯
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Go 语言动态</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              了解 Go 语言的最新发展和社区动态
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="flex flex-col overflow-hidden rounded-lg border shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="bg-gray-100 p-4 dark:bg-gray-800">
              <div className="aspect-video overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
                <div className="h-full w-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <IconCode className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">2023年12月15日</div>
              <h3 className="text-lg font-bold">Go 1.22 新特性预览</h3>
              <p className="text-gray-500 dark:text-gray-400">
                探索 Go 1.22 版本中的新功能、性能改进和工具链更新
              </p>
              <div className="pt-2">
                <Link href="/blog/go-1-22-preview" className="inline-flex items-center text-blue-600 hover:underline">
                  阅读更多
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="bg-gray-100 p-4 dark:bg-gray-800">
              <div className="aspect-video overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
                <div className="h-full w-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <IconCode className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">2023年11月28日</div>
              <h3 className="text-lg font-bold">Go 在微服务架构中的应用</h3>
              <p className="text-gray-500 dark:text-gray-400">
                深入探讨 Go 语言在构建高性能、可扩展微服务系统中的优势
              </p>
              <div className="pt-2">
                <Link href="/blog/go-microservices" className="inline-flex items-center text-blue-600 hover:underline">
                  阅读更多
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="bg-gray-100 p-4 dark:bg-gray-800">
              <div className="aspect-video overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
                <div className="h-full w-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <IconCode className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 p-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">2023年11月10日</div>
              <h3 className="text-lg font-bold">Go 语言中文网社区活动</h3>
              <p className="text-gray-500 dark:text-gray-400">
                参与我们的线上技术分享会，与行业专家交流 Go 开发经验
              </p>
              <div className="pt-2">
                <Link href="/events/online-meetup" className="inline-flex items-center text-blue-600 hover:underline">
                  阅读更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}