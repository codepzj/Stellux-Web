import { FriendShowVO, getFriendListAPI } from '@/api/friend'
import FriendCard from '@/components/business/friends/FriendCard'
import FriendSubmitModal from '@/components/business/friends/FriendSubmitModal'
import { Card, CardContent } from '@/components/ui/card'
import Comment from '@/components/business/comment'
import { Spacer } from '@heroui/spacer'
import { User, Globe, MessageCircle, Crown, Info } from 'lucide-react'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function FriendsPage() {
  const { data } = await getFriendListAPI()
  const friendList: FriendShowVO[] = data || []

  const typeLabels: Record<number, string> = {
    0: '大佬',
    1: '技术型',
    2: '设计型',
    3: '生活型',
  }

  const groups: Record<number, typeof friendList> = { 0: [], 1: [], 2: [], 3: [] }
  friendList?.forEach((f) => {
    const t = f.website_type as number
    if (t in groups) groups[t]!.push(f)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {[0, 1, 2, 3].map((t) =>
        groups[t] && groups[t]!.length > 0 ? (
          <section key={t} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{typeLabels[t]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups[t]!.map((f) => (
                <FriendCard key={`${f.site_url}-${f.name}`} friend={f} />
              ))}
            </div>
          </section>
        ) : null
      )}
      <div className="mt-8 text-sm">
        <FriendSubmitModal />
      </div>
      <div className="my-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-4">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-gray-600 dark:text-gray-300 mt-0.5" />
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">友链交换规则</div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              每月持续输出内容；请先挂载本站友链，完成后在「自助提交友链」中提交申请。
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Card className="border border-border/20 bg-card/10 shadow-sm transition-none">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* 左侧：头像和基本信息 */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-muted flex-shrink-0 ring-2 ring-primary/20">
                  <Image
                    src="https://cdn.codepzj.cn/image/20250529174726187.jpeg"
                    alt="头像"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-800 dark:text-gray-200">名称：</span>
                      <span className="text-gray-900 dark:text-white font-semibold">浩瀚星河</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-800 dark:text-gray-200">描述：</span>
                      <span className="text-gray-900 dark:text-white">缓慢向上也是一种勇气。</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-800 dark:text-gray-200">网站：</span>
                      <span className="text-gray-900 dark:text-white font-mono text-xs">
                        https://www.golangblog.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-800 dark:text-gray-200">头像：</span>
                      <span className="text-gray-900 dark:text-white font-mono text-xs">
                        https://cdn.codepzj.cn/image/20250529174726187.jpeg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Spacer y={16} />
      <Comment />
    </div>
  )
}
