import Link from "next/link";
import { 
  IconUsers, 
  IconBrandGithub, 
  IconBrandDiscord 
} from "@tabler/icons-react";

export default function CommunitySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              加入我们
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Go 语言社区</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              加入我们的社区，与其他 Go 开发者交流学习
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
          <Link href="/forum" className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconUsers className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">开发者论坛</h3>
              <p className="text-gray-500 dark:text-gray-400">
                参与技术讨论，分享经验，解决问题
              </p>
            </div>
          </Link>
          <Link href="https://github.com/golang-china" className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconBrandGithub className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">GitHub 组织</h3>
              <p className="text-gray-500 dark:text-gray-400">
                参与开源项目，贡献代码，共同进步
              </p>
            </div>
          </Link>
          <Link href="/discord" className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-950 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 dark:bg-gray-800">
              <IconBrandDiscord className="h-6 w-6 text-blue-600" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Discord 社区</h3>
              <p className="text-gray-500 dark:text-gray-400">
                实时交流，结识同行，共同学习成长
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}