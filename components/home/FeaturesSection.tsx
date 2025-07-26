import {
  IconRocket,
  IconCode,
  IconPuzzle,
  IconBook,
  IconUsers,
  IconBrandGithub,
} from '@tabler/icons-react'

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <IconRocket className="w-4 h-4" />
              为什么选择 Go
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent dark:from-white dark:to-blue-200">
              Go 语言特性
            </h2>
            <p className="max-w-[900px] text-lg text-gray-600 md:text-xl/relaxed dark:text-gray-300">
              Go 是一种开源编程语言，能让你轻松构建简单、可靠且高效的软件
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-900/30 dark:to-blue-800/30"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
                <IconRocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">高性能</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Go 编译为机器码，运行速度接近 C/C++，同时具有垃圾回收功能
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-green-900/30 dark:to-green-800/30"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-xl bg-green-100 p-3 dark:bg-green-900/30">
                <IconCode className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">简洁易学</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                语法简单清晰，关键字少，容易上手，提高开发效率
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-purple-900/30 dark:to-purple-800/30"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-xl bg-purple-100 p-3 dark:bg-purple-900/30">
                <IconPuzzle className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">并发支持</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                内置 goroutine 和 channel，轻松实现高并发程序
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-orange-900/30 dark:to-orange-800/30"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-xl bg-orange-100 p-3 dark:bg-orange-900/30">
                <IconBook className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">标准库丰富</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                提供完善的标准库，无需大量第三方依赖即可构建应用
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-red-900/30 dark:to-red-800/30"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-xl bg-red-100 p-3 dark:bg-red-900/30">
                <IconUsers className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">活跃社区</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                全球开发者社区活跃，持续更新迭代，生态系统不断完善
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-indigo-900/30 dark:to-indigo-800/30"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-xl bg-indigo-100 p-3 dark:bg-indigo-900/30">
                <IconBrandGithub className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">开源免费</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                完全开源，可自由使用、修改和分发，适合各类项目开发
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
