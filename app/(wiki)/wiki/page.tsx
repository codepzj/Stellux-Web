"use client";

import { useEffect, useState } from "react";
import { getAllPublicDocument } from "@/api/document";
import type { DocumentRootVO } from "@/types/doc";
import { DocCard } from "@/components/business/card/doc";
import Empty from "@/components/basic/empty";
import { PageTransition } from "@/components/page-transition";

export default function DocumentPage() {
  const [docList, setDocList] = useState<DocumentRootVO[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const start = Date.now();
    const res = await getAllPublicDocument();
    const minWait = 400;
    const cost = Date.now() - start;
    if (cost < minWait) await new Promise((r) => setTimeout(r, minWait - cost));
    setDocList(res.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageTransition
      loading={loading}
      withHeader={false}
      empty={docList.length === 0}
      emptyUI={<Empty info="暂无文档" />}
    >
      <div className="flex w-full flex-col my-4 md:gap-8">
        <div className="w-full flex flex-col gap-4 mb-20">
          {docList.map((item, index) => (
            <DocCard key={item.id} doc={item} idx={index} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
