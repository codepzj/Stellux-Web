import { GraduationCap, Briefcase, Heart, Code2 } from 'lucide-react'
import { PageContent } from '@/types/page'

interface AboutContentProps {
  config?: PageContent
}

export default function AboutContent({ config }: AboutContentProps) {
  const skills = config?.skills || [
    { category: '后端', items: ['Go', 'Gin', 'Kratos', 'gRPC'] },
    { category: '前端', items: ['React', 'Next.js', 'Vue', 'TypeScript'] },
    { category: '数据库', items: ['MongoDB', 'MySQL', 'Redis'] },
    { category: '工具', items: ['Docker', 'Git', 'Linux', 'Nginx'] },
  ]

  const timeline = config?.timeline || [
    {
      year: '2025-09 ~ 2025-12',
      title: '技术探索',
      desc: '深入学习 Go 微服务架构，实践云原生技术',
    },
    {
      year: '2025-01 ~ 2025-08',
      title: '开源项目',
      desc: '开发 Stellux 博客系统，持续维护开源项目',
    },
    { year: '2024-01 ~ 2024-12', title: '编程启蒙', desc: '开始系统学习编程，接触 Web 开发' },
  ]

  const interests = config?.interests || ['开源', '技术写作', '极简设计', '效率工具']

  return (
    <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14">
      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Code2 className="w-5 h-5" />
          技术栈
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          成长历程
        </h2>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700" />
                {index < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-gray-200 dark:bg-gray-800" />
                )}
              </div>
              <div className="pb-6">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {item.year}
                </span>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Heart className="w-5 h-5" />
          兴趣爱好
        </h2>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* Current Focus */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          当前专注
        </h2>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {(config?.focus_items || ['Golang 服务端实践与工具沉淀', '维护个人博客与文档体系（Stellux）', '探索微服务架构与云原生技术']).map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
