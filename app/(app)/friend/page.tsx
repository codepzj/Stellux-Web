import { getFriendList } from "@/api/friend";
import FriendCard from "@/components/basic/card/friend";

const websiteTypeMap = {
  0: "大佬",
  1: "技术型",
  2: "设计型",
  3: "生活型",
};

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default async function Friend() {
  const res = await getFriendList();

  const grouped: Record<number, typeof res> = {
    0: [],
    1: [],
    2: [],
    3: [],
  };

  for (const friend of res) {
    grouped[friend.website_type]?.push(friend);
  }

  return (
    <div className="mx-auto px-4 py-8 space-y-12">
      {Object.entries(websiteTypeMap).map(([typeStr, title]) => {
        const type = Number(typeStr);
        const friends = grouped[type];
        if (!friends || friends.length === 0) return null;

        return (
          <div key={type}>
            <h2 className="relative text-3xl font-extrabold text-gray-900 dark:text-white mb-8 after:absolute after:-bottom-1 after:left-0 after:w-20 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600">
              {title}
            </h2>
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] lg:grid-cols-2 2xl:grid-cols-3">
              {shuffle(friends).map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
