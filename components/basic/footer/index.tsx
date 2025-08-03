import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:px-8">
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
