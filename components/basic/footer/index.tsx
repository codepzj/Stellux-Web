'use client'

import { Image } from '@heroui/react'

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto w-full bg-white dark:bg-gray-950">
      <div className="px-4 py-6 flex flex-col items-center gap-2">
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} 浩瀚星河. 保留所有权利.
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <Image src="/icp.png" alt="备案图标" width={14} height={14} />
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
    </footer>
  )
}
