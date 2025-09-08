import { IconCloud } from '@/components/magicui/icon-cloud'

export default function AboutContent() {
  const stackLogos = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">你好 👋</h2>
      <p className="my-6">我是 codepzj</p>

      <h2 className="text-2xl font-bold mb-2">技术栈</h2>
      <div className="my-3 flex justify-center">
        <IconCloud images={stackLogos} />
      </div>

      <h2 className="text-2xl font-bold mb-2">座右铭</h2>
      <p className="my-6">
        低级的欲望通过放纵就可获得；高级的欲望通过自律方可获得；顶级的欲望通过煎熬才可获得。
        “所谓自由，不是随心所欲，而是自我主宰。”
      </p>
    </div>
  )
}
