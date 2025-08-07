'use client'

import Navbar from '@/components/basic/navbar'
import Footer from '@/components/basic/footer'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <section className="w-full py-24 flex flex-col items-center justify-center bg-white dark:bg-gray-950">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Go语言中文网
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            Go语言学习与交流的中文社区
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
