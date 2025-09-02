import { getFriendListAPI } from '@/api/friend'
import FriendCard from '@/components/friends/FriendCard'

export const revalidate = 3600

export default async function FriendsPage() {
  const { data } = await getFriendListAPI()

  const typeLabels: Record<number, string> = {
    0: '大佬',
    1: '技术型',
    2: '设计型',
    3: '生活型',
  }

  const groups: Record<number, typeof data> = { 0: [], 1: [], 2: [], 3: [] }
  data?.forEach((f) => {
    const t = f.website_type as number
    if (t in groups) groups[t]!.push(f)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">我的友链</h1>

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
        <a className="text-blue-600 hover:underline" href="/friends/submit">
          自助提交友链 →
        </a>
      </div>
    </div>
  )
}
