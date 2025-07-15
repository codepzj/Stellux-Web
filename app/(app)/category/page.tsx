"use client";

import { queryCategoryLabelWithCountAPI } from "@/api/label";
import { LabelWithCountVO } from "@/types/label";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useLoading } from "@/context/loading-provider";

export default function CategoryPage() {
  const [categoryList, setCategoryList] = useState<LabelWithCountVO[]>([]);
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(true);
    queryCategoryLabelWithCountAPI().then((res) => {
      setCategoryList(res.data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex w-full flex-col gap-10 my-4 md:gap-8">
      {categoryList.map((item) => (
        <Badge key={item.id} variant="outline" className="cursor-pointer">
          #{item.name} ({item.count})
        </Badge>
      ))}
    </div>
  );
}
