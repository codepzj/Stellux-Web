'use client'

import { Button } from '@heroui/button'
import { useRouter } from 'next/navigation'
import { IconAlertCircle } from '@tabler/icons-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-4 dark:bg-blue-900/20 mb-6">
            <IconAlertCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            页面不存在
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            很抱歉，您访问的页面不存在。请检查网址是否正确，或点击下方按钮返回首页。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => router.push('/')} color="primary">
              返回首页
            </Button>
            <Button variant="flat" onClick={() => router.back()}>
              返回上一页
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
