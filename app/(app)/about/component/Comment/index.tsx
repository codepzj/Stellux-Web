"use client";
import Comment from "@/components/business/comment";
import useConfigStore from "@/store/config";

export default function AboutComment() {
  const { commentSetting } = useConfigStore();
  if (commentSetting.allow_comment_type !== "all") {
    return null;
  }
  return (
    <div className="px-1 max-w-3xl mx-auto">
      <Comment />
    </div>
  );
}
