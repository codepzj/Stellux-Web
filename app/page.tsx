'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/basic/navbar'
import Footer from '@/components/basic/footer'
import { BookOpen, FileText, Users, Coffee } from 'lucide-react'

export default function Page() {
  const router = useRouter()

  return (
    <div className="flex flex-col h-screen bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            {/* 主标题区域 */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl text-primary">一个程序员的碎碎念</p>
                <p className="text-sm text-muted-foreground/70 max-w-md mx-auto">
                  偶尔写点技术，偶尔聊聊生活，偶尔分享一些踩坑经历
                </p>
              </div>
            </div>

            {/* 导航区域 */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => router.push('/blog')}
                className="flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                博客
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/document')}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                文档
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/friends')}
                className="flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                友链
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/about')}
                className="flex items-center gap-2"
              >
                <Coffee className="w-4 h-4" />
                关于
              </Button>
            </div>

            {/* 底部小字 */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground">最近在学 Grpc, 有空聊聊</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
