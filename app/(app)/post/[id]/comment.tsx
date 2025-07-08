"use client";
import Comment from "@/components/basic/comment";
import useConfigStore from "@/store/config";

export default function BlogComment() {
  const { commentSetting } = useConfigStore();
  if (
    commentSetting.allow_comment_type !== "post" &&
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
