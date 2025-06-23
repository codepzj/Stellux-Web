"use client";

import { IPostCard } from "@/types/post";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TopIcon, CategoryIcon, TagIcon } from "@/components/SvgIcon";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export function PostCard({
  post,
  className,
}: {
  post: IPostCard;
  className?: string;
}) {
  const tags = post.tags?.join(", ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex justify-center"
    >
    <Card
      key={post.id}
      className={cn(
        "post-card p-6 rounded-2xl overflow-hidden shadow-none border-none transition-none w-full md:w-4/5 dark:bg-[#0A0A0A] dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 min-w-0">
          <CardHeader className="p-0 mb-3 flex items-center gap-2">
            <div
              className="text-lg md:text-xl text-default-600 truncate max-w-full flex items-center gap-2"
              title={post.title}
            >
              <Link
                href={`/post/${post.id}`}
                className="font-medium text-default-600 hover:text-default-800"
              >
                {post.title}
              </Link>{" "}
              {post.is_top && (
                <span className="text-red-500">
                  <TopIcon size={24} />
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-0 mb-4">
            <CardDescription
              className="text-sm leading-relaxed line-clamp-1 max-w-[70%] overflow-hidden text-ellipsis"
              title={post.description}
            >
              {post.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-3 p-0 text-sm">
            {post.category && (
              <span
                className="flex items-center rounded-full text-default-500"
                title={`Category: ${post.category}`}
              >
                <CategoryIcon size={16} />{" "}
                <span className="text-sm">{post.category}</span>
              </span>
            )}
            {tags && (
              <span
                className="flex items-center rounded-full text-default-500"
                title={`Tags: ${tags}`}
              >
                <TagIcon size={16} />{" "}
                <span className="text-sm truncate max-w-[150px]">{tags}</span>
              </span>
            )}
            <Link
              href={`/post/${post.id}`}
              className="ml-auto flex items-center gap-1.5 rounded-full hover:font-medium text-default-600"
            >
              <span className="text-sm">前往阅读</span>
              <ArrowRightIcon size={16} />
            </Link>
          </CardFooter>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
