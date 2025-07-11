"use client";

import { getPostDetailListAPI } from "@/api/post";
import type { PageVO, Page } from "@/types/page";
import type { PostVO } from "@/types/post";
import Empty from "@/components/basic/empty";
import { PostCard } from "@/components/business/card/post";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PaginationWithLinks } from "@/components/basic/pagination";
import { PageTransition } from "@/components/page-transition";

export default function Home() {
  const searchParams = useSearchParams();
  const page_no = Number(searchParams.get("page")) || 1;
  const page_size = Number(searchParams.get("pageSize")) || 10;
  const page: Page = { page_no, page_size };

  const [postList, setPostList] = useState<PageVO<PostVO>>();
  const [loading, setLoading] = useState(true);

  const fetchPostList = async () => {
    setLoading(true);
    const start = Date.now();
    const res = await getPostDetailListAPI(page);
    const MIN_LOADING_MS = 400;
    const delta = Date.now() - start;
    if (delta < MIN_LOADING_MS) {
      await new Promise((r) => setTimeout(r, MIN_LOADING_MS - delta));
    }
    setPostList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPostList();
  }, [page_no, page_size]);

  return (
    <PageTransition
      loading={loading}
      withHeader={true}
      empty={postList?.total_count === 0}
      emptyUI={<Empty info="暂无文章" />}
    >
      <div className="flex w-full flex-col gap-10 my-4 md:gap-8">
        {postList?.list.map((item, idx) => (
          <PostCard key={item.id} post={item} idx={idx} />
        ))}
        <PaginationWithLinks
          page={page_no}
          pageSize={page_size}
          totalCount={postList?.total_count || 0}
        />
      </div>
    </PageTransition>
  );
}
