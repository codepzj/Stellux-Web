import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

export default function LearningPathSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              学习指南
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Go 学习路径</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              从入门到精通，我们为您提供完整的学习路径
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 mt-8">
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <span className="text-xl font-bold">1</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Go 语言基础</h3>
              <p className="text-gray-500 dark:text-gray-400">
                学习 Go 语言的基本语法、数据类型、控制结构、函数和包管理等基础知识
              </p>
              <div className="flex items-center pt-2">
                <Link href="/docs/basics" className="inline-flex items-center text-blue-600 hover:underline">
                  开始学习
                  <IconChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <span className="text-xl font-bold">2</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">并发编程</h3>
              <p className="text-gray-500 dark:text-gray-400">
                深入理解 Go 的 goroutine、channel、sync 包和并发模式，掌握高效并发程序开发
              </p>
              <div className="flex items-center pt-2">
                <Link href="/docs/concurrency" className="inline-flex items-center text-blue-600 hover:underline">
                  开始学习
                  <IconChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <span className="text-xl font-bold">3</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Web 开发</h3>
              <p className="text-gray-500 dark:text-gray-400">
                学习使用 Go 标准库和流行框架（如 Gin、Echo、Fiber）构建高性能 Web 应用和 API
              </p>
              <div className="flex items-center pt-2">
                <Link href="/docs/web-dev" className="inline-flex items-center text-blue-600 hover:underline">
                  开始学习
                  <IconChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50">
              <span className="text-xl font-bold">4</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">微服务与云原生</h3>
              <p className="text-gray-500 dark:text-gray-400">
                探索 Go 在微服务架构、Docker、Kubernetes 和云原生应用开发中的应用
              </p>
              <div className="flex items-center pt-2">
                <Link href="/docs/microservices" className="inline-flex items-center text-blue-600 hover:underline">
                  开始学习
                  <IconChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}