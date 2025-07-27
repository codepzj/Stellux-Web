import Link from 'next/link'
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandDiscord,
  IconBrandYoutube,
  IconExternalLink,
} from '@tabler/icons-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                G
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent dark:from-white dark:to-blue-200">
                Go语言中文网
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              最全面的Go语言中文学习平台, 提供高质量的中文教程、文档和社区支持。
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/golang/go"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-200"
              >
                <IconBrandGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://go.dev/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-200"
              >
                <IconBrandTwitter className="h-5 w-5" />
                <span className="sr-only">Go Blog</span>
              </Link>
              <Link
                href="https://groups.google.com/g/golang-nuts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-200"
              >
                <IconBrandDiscord className="h-5 w-5" />
                <span className="sr-only">Go Discussion</span>
              </Link>
              <Link
                href="https://go.dev/doc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-200"
              >
                <IconBrandYoutube className="h-5 w-5" />
                <span className="sr-only">Go Documentation</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">学习资源</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://go.dev/doc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  官方文档
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.dev/doc/tutorial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  教程指南
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.dev/play/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  在线运行
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://pkg.go.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  包管理
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">社区</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://groups.google.com/g/golang-nuts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  官方讨论组
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.dev/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  官方博客
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/golang/go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  开源贡献
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.dev/help/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  获取帮助
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://go.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  官方网站
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.dev/doc/effective_go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  最佳实践
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.dev/doc/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  常见问题
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://go.dev/doc/install"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-200 flex items-center gap-1"
                >
                  下载安装
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Go语言中文网. 保留所有权利. | 基于{' '}
              <a
                href="https://go.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Go 语言
              </a>{' '}
              官方资源
            </p>
            <div className="flex flex-row items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Image src="/icp.png" alt="备案图标" width={16} height={16} />
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
              >
                粤ICP备2024275864号-4
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
