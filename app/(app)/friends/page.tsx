import { FriendShowVO, getFriendListAPI } from '@/api/friend'
import FriendCard from '@/components/friends/FriendCard'
import FriendSubmitModal from '@/components/friends/FriendSubmitModal'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert } from '@heroui/alert'
import Comment from '@/components/business/comment'
import { Spacer } from '@heroui/spacer'
import { ExternalLink, User, Globe, MessageCircle } from 'lucide-react'
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
      <Alert
        className="my-4"
        color="warning"
        description="每月持续输出内容, 先挂载好本站友链, 完成后在「自助提交友链」提交申请"
        title="友链交换规则"
        variant="faded"
      />
      <div className="mt-8">
        <Card className="border border-border/20 bg-card/10 shadow-sm">
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
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-foreground">浩瀚星河</h3>
                    <Badge variant="secondary" className="text-xs">
                      站长
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    缓慢向上也是一种勇气。
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href="https://www.golangblog.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      网站
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://cdn.codepzj.cn/image/20250529174726187.jpeg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      头像
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
