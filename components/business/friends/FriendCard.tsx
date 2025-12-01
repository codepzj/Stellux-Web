'use client'

import { Card, CardBody, Image, Link, Tooltip } from '@heroui/react'
import { FriendShowVO } from '@/api/friend'
import { CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ExternalLink, Globe } from 'lucide-react'

type Props = {
  friend: FriendShowVO
}

const TYPE_LABELS: Record<number, string> = {
  0: '大佬',
  1: '技术型',
  2: '设计型',
  3: '生活型',
}

export default function FriendCard({ friend }: Props) {
  const typeLabel = TYPE_LABELS[friend.website_type] ?? '其他'

  return (
    <Link href={friend.site_url} target="_blank" rel="noreferrer noopener" className="block">
      <Card className="transition-none border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none bg-white/90 dark:bg-gray-900/70 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/65 cursor-pointer group rounded-lg">
        <CardContent className="p-0 transition-none">
          <div className="flex items-stretch gap-3 sm:gap-4 min-h-[100px] sm:min-h-[120px] transition-none">
            {/* 内容区域 */}
            <div className="flex-1 min-w-0 flex flex-col justify-between transition-none">
              <div>
                {/* 友链标题 */}
                <h3 className="transition-none text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 mt-1 mb-1 sm:mb-2 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-400">
                  {friend.name}
                </h3>

                {/* 友链描述 */}
                <p className="transition-none text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3">
                  {friend.description}
                </p>
              </div>

              {/* 类型标签 - 固定在卡片最底部 */}
              <div className="flex items-center gap-2 flex-wrap transition-none">
                {/* 显示友链类型 */}
                <Badge
                  variant="secondary"
                  className="transition-none text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  <Globe className="h-3 w-3 mr-1" />
                  {typeLabel}
                </Badge>
              </div>
            </div>

            {/* 右侧区域 - 头像和链接 */}
            <div className="flex flex-col items-end justify-between transition-none">
              {/* 头像 - 响应式尺寸 */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 transition-none flex-shrink-0">
                <Image
                  alt={friend.name}
                  src={friend.avatar_url || '/favicon.ico'}
                  width={64}
                  height={64}
                  radius="full"
                  className="object-cover ring-2 ring-gray-200/80 dark:ring-gray-800/80 w-full h-full"
                />
              </div>

              {/* 网站信息 - 与左侧标签对齐 */}
              <div className="transition-none">
                <Badge
                  variant="outline"
                  className="transition-none text-xs text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  {typeLabel}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
