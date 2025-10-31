export default function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">About</h1>
        <p className="text-[15px] md:text-base leading-7 text-gray-800 dark:text-gray-300">
          你好，我是 codepzj，一名服务端开发者。这里记录我的代码与生活片段，
          偶尔分享一些工程实践与踩坑经验。
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">现在在做</h2>
        <ul className="list-disc pl-5 space-y-1 text-[15px] md:text-base leading-7 text-gray-800 dark:text-gray-300">
          <li>Golang 服务端实践与工具沉淀</li>
          <li>维护个人博客与文档体系（Stellux）</li>
          <li>偶尔写写前端与可视化小玩具</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">价值观</h2>
        <p className="text-[15px] md:text-base leading-7 text-gray-800 dark:text-gray-300">
          “低级的欲望通过放纵就可获得；高级的欲望通过自律方可获得；顶级的欲望通过煎熬才可获得。
          所谓自由，不是随心所欲，而是自我主宰。”
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">联系我</h2>
        <div className="flex flex-wrap gap-2">
          <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foregroun" href="https://github.com/codepzj" target="_blank" rel="noreferrer">GitHub</a>
          <a className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-800 text-sm hover:bg-accent hover:text-accent-foregroun" href="https://www.golangblog.com" target="_blank" rel="noreferrer">Blog</a>
        </div>
      </section>
    </div>
  )
}
