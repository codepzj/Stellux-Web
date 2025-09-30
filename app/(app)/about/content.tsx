import { IconCloud } from '@/components/magicui/icon-cloud'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function AboutContent() {
  const stackLogos = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  ]

  const skills = [
    { category: '前端开发', items: ['Vue', 'Tailwind CSS'] },
    { category: '后端开发', items: ['Go', 'Python'] },
    { category: '数据库', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'DevOps', items: ['Docker', 'Linux', 'CI/CD'] },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            你好，我是 codepzj 🧐
          </CardTitle>
          <CardDescription className="text-base text-gray-600 dark:text-gray-300">
            持续学习者
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* 个人介绍 */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              我是一名热爱技术的全栈开发者，专注于构建高质量的 Web 应用程序，喜欢探索新技术，
              享受解决复杂问题的过程，相信代码能够改变世界。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                全栈开发
              </Badge>
              <Badge variant="secondary" className="text-xs">
                开源贡献者
              </Badge>
              <Badge variant="secondary" className="text-xs">
                技术博主
              </Badge>
              <Badge variant="secondary" className="text-xs">
                终身学习者
              </Badge>
            </div>
          </div>

          <Separator className="my-8" />

          {/* 技术栈 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                技术栈
              </h3>
              <p className="text-gray-600 dark:text-gray-300">我使用和熟悉的技术工具，持续更新中</p>
            </div>
            <div className="flex justify-center">
              <IconCloud images={stackLogos} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="outline" className="text-xs md:text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* 开发理念 */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
              开发理念
            </h3>
            <div className="rounded-md bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 p-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              低级的欲望通过放纵就可获得；高级的欲望通过自律方可获得；顶级的欲望通过煎熬才可获得。
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              所谓自由，不是随心所欲，而是自我主宰。在编程的世界里，我追求代码的优雅与简洁，
              相信好的代码不仅能够解决问题，更能够传递思想。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs md:text-sm">
                Clean Code
              </Badge>
              <Badge variant="outline" className="text-xs md:text-sm">
                持续重构
              </Badge>
              <Badge variant="outline" className="text-xs md:text-sm">
                测试驱动
              </Badge>
              <Badge variant="outline" className="text-xs md:text-sm">
                性能优化
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
