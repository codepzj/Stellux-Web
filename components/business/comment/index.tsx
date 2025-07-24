"use client";

import { useState, useRef, useEffect } from "react";
import { Input, Button, Avatar, Textarea, Divider } from "@heroui/react";
import { createCommentAPI, getCommentListByPostIdAPI } from "@/api/comment";
import { addToast } from "@heroui/toast";
import type { CommentVO } from "@/types/comment";
import dayjs from "dayjs";

// SHA256 哈希函数（浏览器原生）
async function sha256(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str.toLowerCase());
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// 生成 weavatar 头像 URL
async function getWeAvatar(email: string): Promise<string> {
  if (!email) return "https://weavatar.com/avatar/default";
  const hash = await sha256(email.trim().toLowerCase());
  return `https://weavatar.com/avatar/${hash}`;
}

export interface PostCommentProps {
  postId: string;
}

const INDENT = 12; // px, 每层缩进宽度

// 扁平评论数组转树形结构
function buildCommentTree(
  flat: CommentVO[],
  rootId: string
): (CommentVO & { replies?: CommentVO[] })[] {
  const map = new Map<string, CommentVO & { replies?: CommentVO[] }>();
  flat.forEach((item) => {
    map.set(item.id, { ...item, replies: [] });
  });
  const tree: (CommentVO & { replies?: CommentVO[] })[] = [];
  map.forEach((item) => {
    if (
      item.comment_id &&
      item.comment_id !== rootId &&
      map.has(item.comment_id)
    ) {
      map.get(item.comment_id)!.replies!.push(item);
    } else {
      tree.push(item);
    }
  });
  return tree;
}

export default function PostComment({ postId }: PostCommentProps) {
  const [comments, setComments] = useState<
    (CommentVO & { replies?: CommentVO[] })[]
  >([]);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [replyTo, setReplyTo] = useState<string>("");
  const [replyingName, setReplyingName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>(
    "https://weavatar.com/avatar/default"
  );
  const [replyQuote, setReplyQuote] = useState<{
    nickname: string;
    content: string;
  } | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // 获取评论列表并转树形
  async function fetchComments() {
    try {
      const res = await getCommentListByPostIdAPI(postId);
      if (res && Array.isArray(res.data)) {
        setComments(buildCommentTree(res.data as CommentVO[], postId));
      } else {
        setComments([]);
      }
    } catch (e) {}
  }

  useEffect(() => {
    fetchComments();
  }, [postId]);

  // 邮箱变化时生成头像
  async function handleEmailChange(val: string) {
    setEmail(val);
    if (val.trim()) {
      const url = await getWeAvatar(val);
      setAvatar(url);
    } else {
      setAvatar("https://weavatar.com/avatar/default");
    }
  }

  // 提交时手动校验
  function validateForm() {
    if (!nickname.trim() || !email.trim() || !content.trim()) {
      addToast({ title: "请填写昵称、邮箱和评论内容", color: "warning" });
      return false;
    }
    if (nickname.length > 20) {
      addToast({ title: "昵称不能超过20个字符", color: "warning" });
      return false;
    }
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      addToast({ title: "请输入有效的邮箱地址", color: "warning" });
      return false;
    }
    if (content.length > 200) {
      addToast({ title: "评论内容不能超过200字", color: "warning" });
      return false;
    }
    if (url && url.length > 100) {
      addToast({ title: "个人主页链接过长", color: "warning" });
      return false;
    }
    return true;
  }

  // 提交评论或回复
  const handleSubmit = async () => {
    if (!validateForm()) return;
    setSubmitting(true);
    const commentReq = {
      nickname,
      email,
      url: url.trim() || undefined,
      avatar,
      content,
      post_id: postId,
      comment_id: replyTo || postId,
    };
    try {
      await createCommentAPI(commentReq);
      await fetchComments();
      setContent("");
      setReplyTo("");
      setReplyingName("");
      setReplyQuote(null);
      addToast({ title: "评论成功！", color: "success" });
    } finally {
      setSubmitting(false);
    }
  };

  // 渲染评论及其回复
  const renderComments = (
    list: (CommentVO & { replies?: CommentVO[] })[],
    depth = 0
  ) =>
    list.map((c, idx) => {
      const isReply = depth > 0;
      return (
        <div
          key={c.id}
          className={`flex gap-2 items-start py-3 group relative`}
          style={{ marginLeft: depth > 0 ? INDENT : 0 }}
        >
          {/* 多层嵌套竖线视觉优化 */}
          {depth > 0 && (
            <div
              className="absolute left-0 top-7 bottom-2 flex justify-center"
              style={{ width: INDENT, zIndex: 0 }}
            >
              <div className="w-px bg-border/40 h-full" />
            </div>
          )}
          <div className="z-10">
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Avatar
                  src={c.avatar}
                  alt={c.nickname}
                  size="sm"
                  className="mt-1 transition-opacity hover:opacity-80"
                />
              </a>
            ) : (
              <Avatar
                src={c.avatar}
                alt={c.nickname}
                size="sm"
                className="mt-1"
              />
            )}
          </div>
          <div className="flex-1 min-w-0 z-10">
            <div className="flex items-center gap-2 mb-1">
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-base text-primary hover:underline transition-colors"
                >
                  {c.nickname}
                </a>
              ) : (
                <span className="font-semibold text-base text-primary">
                  {c.nickname}
                </span>
              )}
              <span className="text-xs text-muted-foreground ml-1 font-normal">
                {dayjs(c.created_at).format("YY-MM-DD HH:mm:ss")}
              </span>
            </div>
            <div className="text-foreground break-words leading-relaxed">
              {c.content}
            </div>
            <div className="mt-1 flex">
              <button
                className="p-0 text-xs font-medium"
                onClick={() => {
                  setReplyTo(c.id);
                  setReplyingName(c.nickname);
                  setReplyQuote({ nickname: c.nickname, content: c.content });
                  setTimeout(() => {
                    formRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }, 0);
                }}
              >
                回复
              </button>
            </div>
            {c.replies && c.replies.length > 0 && (
              <div className="mt-3 space-y-2 relative">
                {renderComments(c.replies, depth + 1)}
              </div>
            )}
          </div>
        </div>
      );
    });

  return (
    <div className="mx-auto space-y-6">
      <div ref={formRef} className="rounded-2xl bg-card/90 p-6 shadow-sm">
        <div className="flex flex-col gap-6 mb-4">
          <div className="flex items-center gap-4">
            <Avatar src={avatar} alt={nickname || "访客"} size="md" />
            <Input
              className="flex-1"
              placeholder="昵称(必填)"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={20}
              autoComplete="off"
            />
            <Input
              className="flex-1"
              placeholder="邮箱(必填)"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              maxLength={40}
              autoComplete="off"
            />
          </div>
          <Input
            className="w-full"
            placeholder="个人主页(选填)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            maxLength={100}
            autoComplete="off"
          />
          {replyQuote && (
            <div className="mb-2 px-3 py-2 rounded border-l-4 border-primary/60 bg-muted/40 text-xs text-muted-foreground relative flex items-center gap-2">
              <span className="font-semibold text-primary">
                @{replyQuote.nickname}
              </span>
              <span className="ml-2 text-foreground/80 line-clamp-1">
                {replyQuote.content.length > 60
                  ? replyQuote.content.slice(0, 60) + "..."
                  : replyQuote.content}
              </span>
              <Button
                size="sm"
                variant="light"
                className="ml-auto px-1 py-0 h-6 text-xs"
                onPress={() => {
                  setReplyTo("");
                  setReplyingName("");
                  setReplyQuote(null);
                }}
              >
                x
              </Button>
            </div>
          )}
          <Textarea
            className="w-full"
            placeholder={replyTo ? `回复 @${replyingName}` : "说点什么吧..."}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            maxLength={200}
            autoComplete="off"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          {replyTo && !replyQuote && (
            <span className="text-xs text-muted-foreground">
              正在回复 @{replyingName}
            </span>
          )}
          <div className="flex gap-2 ml-auto">
            {replyTo && (
              <Button
                size="sm"
                variant="light"
                onPress={() => {
                  setReplyTo("");
                  setReplyingName("");
                  setReplyQuote(null);
                }}
              >
                取消回复
              </Button>
            )}
            <Button
              color="primary"
              size="sm"
              onPress={handleSubmit}
              isLoading={submitting}
              disabled={submitting}
              className="px-6"
            >
              {replyTo ? "回复" : "发表评论"}
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-0 relative">
        {comments.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            暂无评论，快来抢沙发吧！
          </div>
        ) : (
          renderComments(comments)
        )}
      </div>
    </div>
  );
}
