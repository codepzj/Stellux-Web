import Link from "next/link";
import { 
  IconBrandGithub, 
  IconBrandTwitter, 
  IconBrandDiscord,
  IconBrandYoutube
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold text-xl">G</div>
              <span className="font-bold text-xl">Go语言中文网</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400">
              最全面的Go语言中文学习平台，提供高质量的中文教程、文档和社区支持。
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/golang-china" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <IconBrandGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com/golangchina" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <IconBrandTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="/discord" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <IconBrandDiscord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="https://www.youtube.com/c/golangchina" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <IconBrandYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">学习资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  文档中心
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  教程指南
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  代码示例
                </Link>
              </li>
              <li>
                <Link href="/playground" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  在线运行
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  推荐书籍
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">社区</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/forum" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  开发者论坛
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  活动与会议
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  参与贡献
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  招聘信息
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  赞助商
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Go语言中文网. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}