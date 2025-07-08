"use client";

import { PostVO } from "@/types/post";
import { motion } from "framer-motion";
import Image from "next/image";
import { dayFormat, timeBeforeNow } from "@/utils/day";
import Link from "next/link";
import { Calendar, Clock, Folder, Tag, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { H3, P } from "@/components/basic/typography";

export function PostCard({ post, idx }: { post: PostVO; idx: number }) {
  return (
    <motion.div
      key={`post-${post.id}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: idx * 0.05 }}
    >
      <Link
        href={`/post/${post.id}`}
        className="group flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-2xl transition duration-200 p-4"
      >
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={192}
          height={108}
          className="rounded-lg object-cover w-48 h-36 md:block hidden"
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <H3 className="font-sans">{post.title}</H3>

            <div className="flex items-center gap-1 mt-1">
              {/* 作者 */}
              <Badge variant="secondary">
                <User />
                {post.author}
              </Badge>
              {/* 分类 */}
              <Badge variant="secondary">
                <Folder />
                {post.category}
              </Badge>
              {/* 标签 */}
              <Badge variant="secondary">
                <Tag />
                {post.tags?.join(", ")}
              </Badge>
            </div>
            {/* 发布时间 */}
            <div className="flex items-center gap-1">
              <Badge variant="outline">
                <Calendar />
                {dayFormat(post.created_at)}
              </Badge>
              <Badge variant="outline">
                <Clock />
                {timeBeforeNow(post.updated_at)}
              </Badge>
            </div>
          </div>
          <P className="text-sm text-foreground line-clamp-2 mt-1">
            {post.description || "暂无描述"}
          </P>
        </div>
      </Link>
    </motion.div>
  );
}
