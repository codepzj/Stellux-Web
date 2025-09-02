import { FriendShowVO, getFriendListAPI } from '@/api/friend'
import FriendCard from '@/components/friends/FriendCard'
import FriendSubmitModal from '@/components/friends/FriendSubmitModal'
import { Card, CardBody } from '@heroui/card'
import { Alert } from '@heroui/alert'
import Comment from '@/components/business/comment'
import { Spacer } from '@heroui/spacer'

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
        <Card
          radius="lg"
          className="border border-gray-100 dark:border-gray-900/60 bg-gradient-to-br from-white/70 to-white/40 dark:from-gray-950/70 dark:to-gray-950/40 backdrop-blur-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300"
        >
          <CardBody className="p-4 gap-2 flex-col-1">
            <span>
              <b>头像链接：</b>
              <a href="https://cdn.codepzj.cn/image/20250529174726187.jpeg" target="_blank">
                https://cdn.codepzj.cn/image/20250529174726187.jpeg
              </a>
            </span>
            <span>
              <b>站点名称：</b>浩瀚星河
            </span>
            <span>
              <b>网址：</b>
              <a href="https://www.golangblog.com" target="_blank">
                https://www.golangblog.com
              </a>
            </span>
            <span>
              <b>简介：</b>缓慢向上也是一种勇气。
            </span>
          </CardBody>
        </Card>
      </div>
      <Spacer y={16} />
      <Comment />
    </div>
  )
}
