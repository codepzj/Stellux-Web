"use client";

import { PostVO } from "@/types/post";
import { motion } from "framer-motion";
import Image from "next/image";
import { dayFormat } from "@/utils/day-format";
import Link from "next/link";

export function PostCard({ post, idx }: { post: PostVO; idx: number }) {
  return (
    <motion.div
      key={`post-${post.id}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: idx * 0.1 }}
    >
      <Link
        href={`/post/${post.id}`}
        className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 p-4"
      >
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={240}
          height={180}
          className="rounded-md object-cover w-60 h-48 md:block hidden"
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold text-gray-900">
              {post.title}
            </h4>

            <div className="text-sm text-gray-500 space-y-1 leading-relaxed">
              <p>
                <span className="inline-block mr-2">👤</span>
                作者：{post.author} ｜ 分类：{post.category}
              </p>
              <p>
                <span className="inline-block mr-2">🕒</span>
                发布时间：{dayFormat(post.created_at)}
              </p>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mt-1 line-clamp-2">
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags?.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
