"use client";

import { useEffect, useState } from "react";
import { getAllPublicDocument } from "@/api/document";
import type { DocumentRootVO } from "@/types/doc";
import { DocCard } from "@/components/business/card/doc";

export default function DocumentPage() {
  const [docList, setDocList] = useState<DocumentRootVO[]>([]);

  const fetchData = async () => {
    const res = await getAllPublicDocument();
    setDocList(res.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="flex w-full flex-col my-4 md:gap-8">
        <div className="w-full flex flex-col gap-4">
          {docList.map((item) => (
            <DocCard key={item.id} document={item} />
          ))}
      </div>
    </div>
  );
}
