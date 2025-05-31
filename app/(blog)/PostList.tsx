"use client";

import { useEffect, useState } from "react";
import { getPostDetailListAPI } from "@/api/post";
import { PostCard } from "@/components/Card/PostCard";
import { Pagination } from "@heroui/pagination";
import type { PostVO } from "@/types/post";
import type { PageVO, Page } from "@/types/page";

export function PostList({ initialData }: { initialData: PageVO<PostVO> }) {
    const [pageNo, setPageNo] = useState(initialData.page_no);
    const [totalPage, setTotalPage] = useState(initialData.total_page);
    const [posts, setPosts] = useState<PostVO[]>(initialData.list);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            const req: Page = {
                page_no: pageNo,
                page_size: 10,
            };
            const res = await getPostDetailListAPI(req);
            setPosts(res?.data?.list || []);
            setTotalPage(res?.data?.total_page || 1);
            setLoading(false);

            // 等页面渲染完成后滚动
            requestAnimationFrame(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        };

        fetch();
    }, [pageNo]);

    return (
        <div className="flex flex-col gap-4">
            {posts.map((item) => (
                <PostCard className="w-full" key={item.id} post={item} />
            ))}
            {totalPage > 1 && (
                <div className="my-10 flex justify-end">
                    <Pagination
                        page={pageNo}
                        total={totalPage}
                        onChange={(page) => setPageNo(page)}
                        isDisabled={loading}
                    />
                </div>
            )}
        </div>
    );
}
