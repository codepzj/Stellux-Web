import Link from 'next/link'
import { IconUsers, IconBrandGithub, IconBrandDiscord } from '@tabler/icons-react'

export default function CommunitySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <IconUsers className="w-4 h-4" />
              加入我们
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent dark:from-white dark:to-blue-200">
              Go 语言社区
            </h2>
            <p className="max-w-[900px] text-lg text-gray-600 md:text-xl/relaxed dark:text-gray-300">
              加入我们的社区，与其他 Go 开发者交流学习
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
          <Link
            href="https://groups.google.com/g/golang-nuts"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-blue-900/30 dark:to-blue-800/30"></div>
            <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center justify-center rounded-xl bg-blue-100 p-4 dark:bg-blue-900/30">
                <IconUsers className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">官方讨论组</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  参与官方 Go 语言讨论组，与全球开发者交流技术问题
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://github.com/golang/go"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-green-900/30 dark:to-green-800/30"></div>
            <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center justify-center rounded-xl bg-green-100 p-4 dark:bg-green-900/30">
                <IconBrandGithub className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">GitHub 仓库</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  参与 Go 语言开源项目，贡献代码，共同进步
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://go.dev/help/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-purple-900/30 dark:to-purple-800/30"></div>
            <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center justify-center rounded-xl bg-purple-100 p-4 dark:bg-purple-900/30">
                <IconBrandDiscord className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">获取帮助</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  访问官方帮助页面，获取技术支持和学习资源
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
