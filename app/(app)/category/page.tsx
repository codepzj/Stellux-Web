"use client";

import { queryCategoryLabelWithCountAPI } from "@/api/label";
import { LabelWithCountVO } from "@/types/label";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function CategoryPage() {
  const [categoryList, setCategoryList] = useState<LabelWithCountVO[]>([]);
  useEffect(() => {
    queryCategoryLabelWithCountAPI().then((res) => {
      setCategoryList(res.data || []);
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
