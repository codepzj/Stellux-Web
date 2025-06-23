import { getPostDetailListAPI } from "@/api/post";
import type { PageVO, Page } from "@/types/page";
import type { PostVO } from "@/types/post";
import Empty from "@/components/Empty";
import { PostCard } from "@/components/Card/PostCard";
import Header from "@/components/Header";
import { Pagination, PaginationItem, PaginationLink } from "@/components/ui/pagination";

interface Props {
  searchParams: Promise<{ page_no: number,page_size: number }>
}
// SSR 获取首屏数据
export default async function Home({ searchParams }: Props) {
  const { page_no, page_size } = await searchParams;
  console.log(page_no, page_size);
  const page: Page = {
    page_no: page_no || 1,
    page_size: page_size || 10,
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

  return listData.total_count === 0 ? (
    <Empty info="暂无文章" />
  ) : (
    <div className="flex flex-col justify-center items-center gap-4 px-4 w-full  ">
      {listData.list.map((item) => (
        <PostCard key={item.id} post={item} />
      ))}
      <Pagination>
        <PaginationItem>
          <PaginationLink href="/?page_no=1&page_size=10">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/?page_no=2&page_size=10">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/?page_no=3&page_size=10">3</PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
}
