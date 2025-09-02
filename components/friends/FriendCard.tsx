'use client'

import { Card, CardBody, Image, Link } from '@heroui/react'
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
        className="relative border border-gray-100 dark:border-gray-900/60 bg-white/60 dark:bg-gray-950/60 backdrop-blur-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-shadow duration-200"
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
              <span className="shrink-0 rounded-full border border-gray-200/80 dark:border-gray-800/80 px-2 py-0.5 text-[10px] text-gray-600 dark:text-gray-300 bg-gray-50/60 dark:bg-gray-900/40">
                {typeLabel}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-600/90 dark:text-gray-300/90 line-clamp-2">
              {friend.description}
            </p>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}
