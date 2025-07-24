"use client";
import Comment from "@/components/business/comment";
import useConfigStore from "@/store/config";

export default function DocComment() {
  const { commentSetting } = useConfigStore();
  if (
    commentSetting.allow_comment_type !== "doc" &&
    commentSetting.allow_comment_type !== "all"
  ) {
    return null;
  }
  return (
    <div className="px-1">
      <Comment />
    </div>
  );
}
