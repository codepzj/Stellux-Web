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
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 个人介绍卡片 */}
      <Card className="border border-border/20 shadow-sm bg-card/5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">你好，我是 codepzj 🧐</CardTitle>
          <CardDescription className="text-md">持续学习者</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              我是一名热爱技术的全栈开发者, 专注于构建高质量的Web应用程序, 喜欢探索新技术,
              享受解决复杂问题的过程, 相信代码能够改变世界。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">全栈开发</Badge>
              <Badge variant="secondary">开源贡献者</Badge>
              <Badge variant="secondary">技术博主</Badge>
              <Badge variant="secondary">终身学习者</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 技术栈展示 */}
      <Card className="border border-border/20 shadow-sm bg-card/5">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">技术栈</CardTitle>
          <CardDescription>我使用和熟悉的技术工具, 持续更新中</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* 技术图标云 */}
            <div className="flex justify-center">
              <IconCloud images={stackLogos} />
            </div>

            <Separator />

            {/* 技能分类 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-lg">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="outline" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 个人理念 */}
      <Card className="border border-border/20 shadow-sm bg-card/5">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">开发理念</CardTitle>
          <CardDescription>我的编程哲学和人生信条, 持续更新中</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "低级的欲望通过放纵就可获得；高级的欲望通过自律方可获得；顶级的欲望通过煎熬才可获得。"
            </blockquote>
            <p className="text-muted-foreground">
              所谓自由，不是随心所欲，而是自我主宰。在编程的世界里，我追求代码的优雅与简洁，
              相信好的代码不仅能够解决问题，更能够传递思想。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Clean Code</Badge>
              <Badge variant="outline">持续重构</Badge>
              <Badge variant="outline">测试驱动</Badge>
              <Badge variant="outline">性能优化</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
