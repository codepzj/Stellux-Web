"use client";

import { getPostListAPI } from "@/api/post";
import type { PageVO, Page } from "@/types/page";
import type { PostVO } from "@/types/post";
import { PostCard } from "@/components/business/card/post";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination } from "@heroui/react";
import { PageTransition } from "@/components/page-transition";
import Empty from "@/components/basic/empty";

export default function Home() {
  const searchParams = useSearchParams();
  const page_no = Number(searchParams.get("page")) || 1;
  const page_size = Number(searchParams.get("pageSize")) || 10;
  const page: Page = { page_no, page_size };
  const router = useRouter();
  const [postList, setPostList] = useState<PageVO<PostVO> | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchPostList = async () => {
    setLoading(true);
    try {
      const res = await getPostListAPI(page);
      setPostList(res.data);
    } catch (e) {
      setPostList(undefined);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostList();
  }, [page_no, page_size]);

  return (
    <PageTransition loading={loading}>
      <div className="flex w-full flex-col gap-10 my-4 md:gap-8">
        {!postList || !postList.list || postList.list.length === 0 ? (
          <Empty info="暂无文章" />
        ) : (
          postList.list.map((item) => (
            <PostCard key={item.id} post={item} />
          ))
        )}
        {postList && postList.total_page > 1 && (
          <Pagination
            className="flex justify-end"
            total={postList.total_page}
            page={page_no}
            onChange={(page) => {
              router.push(`/post?page=${page}`);
            }}
            showShadow
            loop
          />
        )}
      </div>
    </PageTransition>
  );
}
