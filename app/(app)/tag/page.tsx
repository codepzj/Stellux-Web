"use client";

import { queryTagLabelWithCountAPI } from "@/api/label";
import { useEffect, useState } from "react";
import { LabelWithCountVO } from "@/types/label";
import { Badge } from "@/components/ui/badge";
import { useLoading } from "@/context/loading-provider";

export default function TagPage() {
  const [tagList, setTagList] = useState<LabelWithCountVO[]>([]);
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(true);
    queryTagLabelWithCountAPI().then((res) => {
      setTagList(res.data);
      setLoading(false);
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
