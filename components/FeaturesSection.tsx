import { 
  IconRocket, 
  IconCode, 
  IconPuzzle, 
  IconBook, 
  IconUsers, 
  IconBrandGithub 
} from "@tabler/icons-react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              为什么选择 Go
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Go 语言特性</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Go 是一种开源编程语言，能让你轻松构建简单、可靠且高效的软件
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="flex flex-col items-start space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconRocket className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">高性能</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Go 编译为机器码，运行速度接近 C/C++，同时具有垃圾回收功能
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconCode className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">简洁易学</h3>
              <p className="text-gray-500 dark:text-gray-400">
                语法简单清晰，关键字少，容易上手，提高开发效率
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconPuzzle className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">并发支持</h3>
              <p className="text-gray-500 dark:text-gray-400">
                内置 goroutine 和 channel，轻松实现高并发程序
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconBook className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">标准库丰富</h3>
              <p className="text-gray-500 dark:text-gray-400">
                提供完善的标准库，无需大量第三方依赖即可构建应用
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconUsers className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">活跃社区</h3>
              <p className="text-gray-500 dark:text-gray-400">
                全球开发者社区活跃，持续更新迭代，生态系统不断完善
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconBrandGithub className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">开源免费</h3>
              <p className="text-gray-500 dark:text-gray-400">
                完全开源，可自由使用、修改和分发，适合各类项目开发
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}