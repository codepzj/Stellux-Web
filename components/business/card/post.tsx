"use client";

import { PostVO } from "@/types/post";
import { motion } from "framer-motion";
import { Ripple } from "@/components/basic/ripple";
import Image from "next/image";
import { dayFormat, timeBeforeNow } from "@/utils/day";
import Link from "next/link";
import { Calendar, Clock, Folder, Tag, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { H3 } from "@/components/basic/typography";

export function PostCard({ post, idx }: { post: PostVO; idx: number }) {
  return (
    <motion.div
      key={`post-${post.id}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: idx * 0.05 }}
    >
      <Ripple className="rounded-2xl">
        <Link
          href={`/post/${post.id}`}
          className="group flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 hover:bg-gray-100 dark:bg-zinc-900/80 dark:hover:bg-zinc-800/80 transition duration-300 p-4"
        >
          {/* 封面图 */}
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={192}
            height={108}
            className="rounded-lg object-cover w-48 h-36 md:block hidden"
          />

          {/* 内容区 */}
          <div className="flex flex-col justify-between flex-1 gap-2">
            <div className="flex flex-col gap-2">
              {/* 标题 */}
              <H3 className="font-sans">{post.title}</H3>

              {/* 作者 / 分类 / 标签 */}
              <div className="flex flex-wrap items-center gap-1 mt-1 text-sm">
                <Badge variant="secondary">
                  <User className="w-4 h-4 mr-1" />
                  {post.author}
                </Badge>
                <Badge variant="secondary">
                  <Folder className="w-4 h-4 mr-1" />
                  {post.category}
                </Badge>
                {post.tags?.length > 0 && (
                  <Badge variant="secondary">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.tags.join(", ")}
                  </Badge>
                )}
              </div>

              {/* 时间信息 */}
              <div className="flex flex-wrap items-center gap-1 text-sm">
                <Badge variant="outline">
                  <Calendar className="w-4 h-4 mr-1" />
                  {dayFormat(post.created_at)}
                </Badge>
                <Badge variant="outline">
                  <Clock className="w-4 h-4 mr-1" />
                  {timeBeforeNow(post.updated_at)}
                </Badge>
              </div>
            </div>

            {/* 描述内容 */}
            <div className="text-sm text-foreground line-clamp-2 md:line-clamp-1">
              {post.description || "暂无描述"}
            </div>
          </div>
        </Link>
      </Ripple>
    </motion.div>
  );
}
