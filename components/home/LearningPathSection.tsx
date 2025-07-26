import Link from 'next/link'
import { IconChevronRight, IconBook, IconCode, IconGlobe, IconCloud } from '@tabler/icons-react'

export default function LearningPathSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <IconBook className="w-4 h-4" />
              学习指南
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent dark:from-white dark:to-blue-200">
              Go 学习路径
            </h2>
            <p className="max-w-[900px] text-lg text-gray-600 md:text-xl/relaxed dark:text-gray-300">
              从入门到精通，我们为您提供完整的学习路径
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 mt-12">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-900/30 dark:to-blue-800/30"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <IconBook className="h-8 w-8" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Go 语言基础</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  学习 Go 语言的基本语法、数据类型、控制结构、函数和包管理等基础知识
                </p>
                <div className="flex items-center pt-2">
                  <Link
                    href="https://go.dev/doc/tutorial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    开始学习
                    <IconChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-green-900/30 dark:to-green-800/30"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-green-200 bg-green-50 text-green-600 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                <IconCode className="h-8 w-8" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">并发编程</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  深入理解 Go 的 goroutine、channel、sync 包和并发模式，掌握高效并发程序开发
                </p>
                <div className="flex items-center pt-2">
                  <Link
                    href="https://go.dev/doc/effective_go#concurrency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                  >
                    开始学习
                    <IconChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-purple-900/30 dark:to-purple-800/30"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <IconGlobe className="h-8 w-8" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web 开发</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  学习使用 Go 标准库和流行框架（如 Gin、Echo、Fiber）构建高性能 Web 应用和 API
                </p>
                <div className="flex items-center pt-2">
                  <Link
                    href="https://go.dev/doc/articles/wiki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
                  >
                    开始学习
                    <IconChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-orange-900/30 dark:to-orange-800/30"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-orange-200 bg-orange-50 text-orange-600 dark:border-orange-800 dark:bg-orange-900/30 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                <IconCloud className="h-8 w-8" />
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">微服务与云原生</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  探索 Go 在微服务架构、Docker、Kubernetes 和云原生应用开发中的应用
                </p>
                <div className="flex items-center pt-2">
                  <Link
                    href="https://go.dev/doc/tutorial/web-service-gin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                  >
                    开始学习
                    <IconChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
