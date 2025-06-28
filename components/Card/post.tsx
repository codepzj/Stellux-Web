"use client";

import { IPostCard } from "@/types/post";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Book, Clock, Tag } from "lucide-react";
import { dayFormat } from "@/utils/day-format";
import { useRouter } from "next/navigation";

export function PostCard({
  post,
  className = "",
}: {
  post: IPostCard;
  className?: string;
}) {
  const tags = post.tags?.join(", ");
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.1 }}
      className={`w-full max-w-3xl mx-auto overflow-hidden rounded-xl bg-background shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer ${className}`}
      onClick={() => router.push(`/post/${post.id}`)}
    >
      <div
        className="group relative flex flex-col md:flex-row-reverse"
        role="listitem"
      >
        {/* 小屏背景图 + 内容覆盖 */}
        <div className="relative block md:hidden h-60 w-full">
          <Image
            src={post.thumbnail}
            alt={`${post.title} thumbnail`}
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />

          {/* 文字内容 */}
          <div className="absolute bottom-0 left-0 z-20 w-full px-4 py-3 text-white rounded-b-xl space-y-1">
            <h3 className="text-base font-semibold leading-snug line-clamp-1">
              {post.title}
            </h3>
            {post.description && (
              <p className="text-xs text-white/80 line-clamp-1">
                {post.description}
              </p>
            )}
            <div className="flex items-center gap-3 text-xs text-white/60">
              <div className="flex items-center gap-1">
                <Book className="w-3 h-3" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{dayFormat(post.created_at)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 大屏右侧完整圆角图，垂直居中 */}
        <div className="hidden md:flex md:w-[240px] items-center justify-center p-4">
          <div className="rounded-xl overflow-hidden w-full">
            <AspectRatio ratio={3 / 2}>
              <Image
                src={post.thumbnail}
                alt={`${post.title}`}
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>

        {/* 大屏文字内容区域 */}
        <div className="hidden md:flex flex-col justify-between gap-3 text-foreground p-6 flex-1">
          <h3 className="text-xl font-semibold tracking-tight hover:underline">
            {post.title}
          </h3>

          {post.description && (
            <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-2">
              {post.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Book className="w-4 h-4 text-primary" />
              <span>{post.category}</span>
            </div>
            {tags && (
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4 text-primary" />
                <span>{tags}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" />
              <span>{dayFormat(post.created_at)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
