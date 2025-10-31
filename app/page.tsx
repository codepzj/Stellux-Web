'use client'

import Navbar from '@/components/basic/navbar'
import Footer from '@/components/basic/footer'

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-6">
        <div className="w-full max-w-3xl mx-auto py-12 md:py-16 space-y-8">
          <section className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              Welcome to my blog
            </h1>
            <p className="text-[15px] md:text-base text-gray-800 dark:text-gray-300">
              Hi, I'm codepzj
            </p>
            <p className="text-[15px] md:text-base text-gray-800 dark:text-gray-300">
              广州 ·
              {' '}
              <a href="https://www.golangblog.com" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-foreground">golangblog.com</a>
            </p>
            <p className="text-[15px] md:text-base leading-7 text-gray-800 dark:text-gray-300">
              一名211大学生，爱好 Golang，喜欢探索新技术，享受解决复杂问题的过程。
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Top repositories</h3>
            <div className="flex flex-wrap gap-2">
              <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foreground" href="https://github.com/codepzj/Stellux-Server" target="_blank" rel="noreferrer">Stellux-Server</a>
              <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foreground" href="https://github.com/codepzj/hexo-graph" target="_blank" rel="noreferrer">hexo-graph</a>
              <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foreground" href="https://github.com/codepzj/bubble" target="_blank" rel="noreferrer">bubble</a>
              <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foreground" href="https://github.com/codepzj/review-service" target="_blank" rel="noreferrer">review-service</a>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Find me on</h3>
            <div className="flex flex-wrap gap-2">
              <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foreground" href="https://github.com/codepzj" target="_blank" rel="noreferrer">GitHub</a>
              <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foreground" href="https://www.golangblog.com" target="_blank" rel="noreferrer">Blog</a>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Motto</h3>
            <p className="text-[15px] md:text-base text-gray-800 dark:text-gray-300">
              低级的欲望通过放纵就可获得；高级的欲望通过自律方可获得；顶级的欲望通过煎熬才可获得。“所谓自由，不是随心所欲，而是自我主宰。”
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
