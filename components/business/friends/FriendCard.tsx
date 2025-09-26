'use client'

import { Card, CardBody, Image, Link, Tooltip } from '@heroui/react'
import { FriendShowVO } from '@/api/friend'

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
      <Card
        className="relative border border-gray-100 dark:border-gray-900/60 bg-white/60 dark:bg-gray-950/60 backdrop-blur-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:translate-y-[-1px] transition-all duration-200"
        radius="lg"
      >
        <CardBody className="flex items-start gap-4 p-4">
          <div className="relative">
            <Image
              alt={friend.name}
              src={friend.avatar_url || '/favicon.ico'}
              width={48}
              height={48}
              radius="full"
              className="object-cover ring-1 ring-gray-200/80 dark:ring-gray-800/80"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="font-semibold truncate max-w-[12rem] sm:max-w-[16rem]">
                {friend.name}
              </div>
              <Tooltip content={typeLabel} placement="top" offset={6}>
                <span className="shrink-0 rounded-full border border-gray-200/80 dark:border-gray-800/80 px-2 py-0.5 text-[10px] text-gray-600 dark:text-gray-300 bg-gray-50/60 dark:bg-gray-900/40">
                  {typeLabel}
                </span>
              </Tooltip>
            </div>
            <p className="mt-1 text-sm text-gray-600/90 dark:text-gray-300/90 line-clamp-2">
              {friend.description}
            </p>
            <p className="mt-1 text-xs text-gray-500/90 dark:text-gray-400/90 truncate">
              {friend.site_url}
            </p>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}
