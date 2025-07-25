import { IconUsers, IconCode, IconBook, IconRocket } from "@tabler/icons-react";
import { DATA } from "../data";
import Link from "next/link";

export default function About() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* 关于我们 */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              关于我们
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Go语言中文网</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {DATA.summary}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 dark:border-gray-800">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <IconUsers className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">10万+</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">活跃用户</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 dark:border-gray-800">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <IconCode className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">500+</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">教程文章</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 dark:border-gray-800">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <IconBook className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">100+</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">开源项目</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 dark:border-gray-800">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <IconRocket className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">50+</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">线下活动</p>
            </div>
          </div>
        </section>

        {/* 我们的团队 */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              我们的团队
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">核心团队成员</h2>
            <p className="text-gray-500 dark:text-gray-400">
              我们的团队由一群热爱Go语言的专业开发者组成，致力于为中国开发者提供最优质的Go语言学习资源。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {DATA.team.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center dark:border-gray-800">
                <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-gray-500 dark:text-gray-400">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.social.github && (
                    <Link href={member.social.github} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                      <IconUsers className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {member.social.twitter && (
                    <Link href={member.social.twitter} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                      <IconUsers className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 联系我们 */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              联系我们
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">与我们取得联系</h2>
            <p className="text-gray-500 dark:text-gray-400">
              如果您有任何问题、建议或合作意向，欢迎通过以下方式与我们联系。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6 dark:border-gray-800">
              <h3 className="mb-4 text-xl font-bold">联系方式</h3>
              <div className="space-y-3">
                <p className="flex items-center text-gray-500 dark:text-gray-400">
                  <IconUsers className="mr-2 h-5 w-5" />
                  邮箱：{DATA.contact.email}
                </p>
                <p className="flex items-center text-gray-500 dark:text-gray-400">
                  <IconUsers className="mr-2 h-5 w-5" />
                  电话：{DATA.contact.tel}
                </p>
                <p className="flex items-center text-gray-500 dark:text-gray-400">
                  <IconUsers className="mr-2 h-5 w-5" />
                  地址：中国北京市海淀区中关村软件园
                </p>
              </div>
              <div className="mt-6 flex space-x-4">
                {Object.values(DATA.contact.social).map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-lg border p-6 dark:border-gray-800">
              <h3 className="mb-4 text-xl font-bold">加入我们</h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                我们始终欢迎热爱Go语言的开发者加入我们的团队，一起为中国Go语言社区做出贡献。
              </p>
              <div className="space-y-3">
                <p className="flex items-center text-gray-500 dark:text-gray-400">
                  <IconUsers className="mr-2 h-5 w-5" />
                  贡献文档和教程
                </p>
                <p className="flex items-center text-gray-500 dark:text-gray-400">
                  <IconUsers className="mr-2 h-5 w-5" />
                  参与开源项目开发
                </p>
                <p className="flex items-center text-gray-500 dark:text-gray-400">
                  <IconUsers className="mr-2 h-5 w-5" />
                  成为社区讲师和导师
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/join"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}