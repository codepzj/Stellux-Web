'use client'

import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/basic/navbar'
import Footer from '@/components/basic/footer'

export default function Page() {
  const router = useRouter()
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center overflow-hidden">
        <section className="w-full max-w-5xl px-6 py-20 flex flex-col items-center justify-center relative">
          <div className="relative z-10 text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
              建站初衷：<span className="text-primary">【记录知识】</span>
            </h1>

            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              低级的欲望通过放纵就可获得；高级的欲望通过自律方可获得；顶级的欲望通过煎熬才可获得。“所谓自由，不是随心所欲，而是自我主宰。”
            </p>

            <div className="flex gap-3 justify-center pt-2">
              <Button color="primary" onPress={() => router.push('/blog')}>
                博客
              </Button>
              <Button variant="light" color="default" onPress={() => router.push('/document')}>
                文档
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
