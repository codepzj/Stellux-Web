import Link from 'next/link'
import { IconCode, IconCalendar, IconExternalLink } from '@tabler/icons-react'

export default function NewsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <IconCode className="w-4 h-4" />
              最新资讯
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent dark:from-white dark:to-blue-200">
              Go 语言动态
            </h2>
            <p className="max-w-[900px] text-lg text-gray-600 md:text-xl/relaxed dark:text-gray-300">
              了解 Go 语言的最新发展和社区动态
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 dark:from-blue-900/30 dark:to-blue-800/30">
              <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-700 flex items-center justify-center">
                <IconCode className="h-16 w-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <IconCalendar className="h-4 w-4" />
                <time>2025年2月</time>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Go 1.24 正式发布</h3>
              <p className="text-gray-600 dark:text-gray-300">
                探索 Go 1.24 版本中的新功能、性能改进和工具链更新
              </p>
              <div className="pt-2">
                <Link
                  href="https://go.dev/doc/go1.24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  查看详情
                  <IconExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 dark:from-green-900/30 dark:to-green-800/30">
              <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-green-200 to-green-300 dark:from-green-800 dark:to-green-700 flex items-center justify-center">
                <IconCode className="h-16 w-16 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <IconCalendar className="h-4 w-4" />
                <time>2025年1月</time>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Go 1.25 开发计划</h3>
              <p className="text-gray-600 dark:text-gray-300">
                了解 Go 1.25 版本的开发路线图和即将推出的新特性
              </p>
              <div className="pt-2">
                <Link
                  href="https://go.dev/issue/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
                >
                  查看详情
                  <IconExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 dark:from-purple-900/30 dark:to-purple-800/30">
              <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-800 dark:to-purple-700 flex items-center justify-center">
                <IconCode className="h-16 w-16 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="flex flex-col space-y-4 p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <IconCalendar className="h-4 w-4" />
                <time>2025年3月</time>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Go 语言生态系统</h3>
              <p className="text-gray-600 dark:text-gray-300">
                了解 Go 语言丰富的生态系统和第三方库资源
              </p>
              <div className="pt-2">
                <Link
                  href="https://pkg.go.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
                >
                  查看详情
                  <IconExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
