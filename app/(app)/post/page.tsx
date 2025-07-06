"use client";

import { getPostDetailListAPI } from "@/api/post";
import type { PageVO, Page } from "@/types/page";
import type { PostVO } from "@/types/post";
import Empty from "@/components/Empty";
import { PostCard } from "@/components/Card/post";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";

export default function Home() {
  const searchParams = useSearchParams();
  const page_no = searchParams.get("page_no") || 1;
  const page_size = searchParams.get("page_size") || 10;
  const page: Page = {
    page_no: Number(page_no),
    page_size: Number(page_size),
  };
  const [postList, setPostList] = useState<PageVO<PostVO>>();

  const fetchPostList = async () => {
    const res = await getPostDetailListAPI(page);
    setPostList(res.data);
  };

  useEffect(() => {
    fetchPostList();
  }, [page_no, page_size]);

  if (!postList) {
    return <Loading />;
  }

  return postList?.total_count === 0 ? (
    <Empty info="暂无文章" />
  ) : (
    <div className="flex w-full flex-col gap-10 my-4 md:gap-8">
      {postList?.list.map((item, idx) => (
        <PostCard key={item.id} post={item} idx={idx} />
      ))}
      {postList?.total_page > 1 && (
        <Pagination className="justify-end">
          <PaginationContent>
            {Array.from({ length: postList?.total_page || 0 }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`/?page_no=${index + 1}`}
                  isActive={index + 1 === Number(page_no)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
