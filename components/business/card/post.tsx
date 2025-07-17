"use client";

import { IPostCard } from "@/types/post";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Image } from "@heroui/image";
import { TopIcon, CategoryIcon, TagIcon } from "@/components/basic/svg-icon";

export function PostCard({
  post,
  className,
}: {
  post: IPostCard;
  className?: string;
}) {
  const router = useRouter();
  const tags = post.tags?.join(", ");

  return (
    <Card
      key={post.id}
      className={cn(
        "p-6 rounded-2xl bg-default-100/30 dark:bg-default-100/70 transition-all shadow-md hover:shadow-md overflow-hidden transition-none",
        className
      )}
      onPress={() => router.push(`/post/${post.id}`)}
      isHoverable
      isPressable
    >
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="flex-1 min-w-0">
          <CardHeader className="p-0 mb-4">
            <span
              className="text-base md:text-lg font-semibold truncate px-2 max-w-full text-title"
              title={post.title}
            >
              {post.title}
            </span>
          </CardHeader>
          <CardBody className="p-0 mb-4 md:min-h-8">
            <p
              className="text-sm text-description leading-relaxed px-2 max-w-full line-clamp-2 overflow-hidden text-ellipsis"
              title={post.description}
            >
              {post.description}
            </p>
          </CardBody>

          <CardFooter className="hidden md:flex flex-wrap gap-2 p-0 text-sm text-description">
            {post.category && (
              <span
                className="flex items-center gap-1.5 px-2 py-0.5 truncate"
                title={`分类：${post.category}`}
              >
                <CategoryIcon className="text-default-500" size={16} />
                <span className="text-sm">{post.category}</span>
              </span>
            )}
            {tags && (
              <span
                className="flex items-center gap-1 px-2 py-0.5 truncate"
                title={`标签：${tags}`}
              >
                <TagIcon className="text-default-500" size={17} />
                <span className="text-sm">{tags}</span>
              </span>
            )}
            {post.is_top && (
              <TopIcon className="text-red-500 flex-shrink-0" size={24} />
            )}
          </CardFooter>
        </div>

        {/* Right side: Image */}
        <div className="hidden md:flex justify-center items-center w-48 h-auto flex-shrink-0">
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={180}
              height={120}
              shadow="none"
              loading="lazy"
              isZoomed
              className="object-cover"
            />
          )}
        </div>
      </div>
    </Card>
  );
}
