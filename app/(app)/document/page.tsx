"use client";

import { useEffect, useState } from "react";
import { getAllPublicDocument } from "@/api/document";
import type { DocumentVO } from "@/types/document";
import { DocCard } from "@/components/business/card/doc";
import { IconLoader2 } from "@tabler/icons-react";

export default function DocumentPage() {
  const [docList, setDocList] = useState<DocumentVO[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getAllPublicDocument();
      setDocList(res.data || []);
    } catch (error) {
      console.error("获取文档列表失败:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl flex flex-col items-center justify-center py-20">
          <IconLoader2 className="h-10 w-10 animate-spin text-gray-600 dark:text-gray-400" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            正在加载文档列表...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <section className="space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              文档
            </div>
            <h1 className="text-3xl font-bold tracking-tighter">
              Go语言中文网文档
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              全面的Go语言学习资料、教程和最佳实践指南
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 mt-8">
            {docList.length > 0 ? (
              docList.map((item) => <DocCard key={item.id} document={item} />)
            ) : (
              <div className="flex h-60 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/50">
                <div className="text-center">
                  <p className="text-gray-500 dark:text-gray-400">暂无文档</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
