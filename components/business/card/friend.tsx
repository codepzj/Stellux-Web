import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { FriendShowVO } from '@/types/friend'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'

const websiteTypeMap = {
  0: '大佬',
  1: '技术型',
  2: '设计型',
  3: '生活型',
}

const websiteTypeColors = {
  0: 'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 dark:from-purple-800/50 dark:to-purple-900/50 dark:text-purple-300',
  1: 'bg-gradient-to-r from-green-100 to-green-200 text-green-700 dark:from-green-800/50 dark:to-green-900/50 dark:text-green-300',
  2: 'bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 dark:from-pink-800/50 dark:to-pink-900/50 dark:text-pink-300',
  3: 'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 dark:from-orange-800/50 dark:to-orange-900/50 dark:text-orange-300',
}

export default function FriendCard({ friend }: { friend: FriendShowVO }) {
  return (
    <Card className="w-full p-0 border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden hover:shadow-lg transform">
      <Link
        href={friend.site_url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 h-full flex flex-col"
      >
        <CardHeader className="flex items-center gap-4 p-0">
          <div className="relative flex-shrink-0">
            <Image
              src={friend.avatar_url}
              alt={friend.name}
              width={48}
              height={48}
              className="rounded-full object-cover ring-2 ring-offset-2 ring-offset-white dark:ring-offset-[#1a1a1a] ring-gradient-to-r from-blue-400 to-purple-400"
            />
            <div className="absolute -bottom-1 -right-1 bg-emerald-400 w-3 h-3 rounded-full border-2 border-white dark:border-[#1a1a1a] animate-pulse"></div>
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-100 truncate">
              {friend.name}
            </CardTitle>
            <div className="flex items-center gap-1 mt-1">
              <ExternalLinkIcon className="w-3 h-3 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {friend.site_url}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-3 pb-4 px-0 flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-1">
            {friend.description}
          </p>
        </CardContent>

        <CardFooter className="px-0 pt-0 flex justify-between items-center">
          <span
            className={`text-xs px-2 py-1 rounded-md font-medium ${websiteTypeColors[friend.website_type]}`}
          >
            {websiteTypeMap[friend.website_type]}
          </span>

          <Button
            variant="ghost"
            size="sm"
            className="cursor-pointer group hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowRightIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-100" />
          </Button>
        </CardFooter>
      </Link>
    </Card>
  )
}
