import { getPostDetailListAPI } from "@/api/post";
import { PostList } from "./PostList";
import type { PageVO, Page } from "@/types/page";
import type { PostVO } from "@/types/post";
import { PostTabs } from "./tabs";
import Empty from "@/components/Empty";

// SSR 获取首屏数据
export default async function Home() {
  const page: Page = {
    page_no: 1,
    page_size: 10,
  };

  const res = await getPostDetailListAPI(page);
  const listData: PageVO<PostVO> = res?.data || {
    list: [],
    page_no: 1,
    size: 10,
    total_count: 0,
    total_page: 1,
    field: "",
    order: "DESC",
  };

  return (
    listData.total_count === 0 ? <Empty info="暂无文章" /> : <div className="flex flex-col gap-4 px-4">
      <PostTabs className="sticky top-0 z-50 pt-2 bg-white dark:bg-black" />
      {/* 左侧内容 */}
      <div className="w-full mb-20">
        <PostList initialData={listData} />
      </div>
    </div>
  );
}
