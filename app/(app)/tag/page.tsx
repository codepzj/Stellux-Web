"use client";

import { queryTagLabelWithCountAPI } from "@/api/label";
import { useEffect, useState } from "react";
import { LabelWithCountVO } from "@/types/label";
import { Badge } from "@heroui/react";

export default function TagPage() {
  const [tagList, setTagList] = useState<LabelWithCountVO[]>([]);
  useEffect(() => {
    queryTagLabelWithCountAPI().then((res) => {
      setTagList(res.data);
    });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tagList.map((tag) => (
          <Badge key={tag.id}>
            {tag.name} ({tag.count})
          </Badge>
        ))}
      </div>
    </div>
  );
}
