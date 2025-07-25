"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { cn } from "@/lib/utils";
import { WikiIcon } from "@/components/basic/svg-icon";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DocumentVO } from "@/types/document";

export const DocCard = ({
  document,
  className,
}: {
  document: DocumentVO;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <Card
      key={document.id}
      isHoverable
      isPressable
      className={cn(
        "p-5 rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden max-w-3xl",
        className
      )}
      onPress={() => router.push(`/document/${document.alias}`)}
    >
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="flex-1 min-w-0">
          <CardHeader className="p-0 mb-3 flex items-center gap-2">
            <WikiIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span
              className="text-base md:text-lg font-semibold truncate max-w-full text-gray-800 dark:text-gray-200"
              title={document.title}
            >
              {document.title}
            </span>
          </CardHeader>

          <CardBody className="p-0 mb-3 md:min-h-8">
            <p
              className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-full line-clamp-2 overflow-hidden text-ellipsis"
              title={document.description}
            >
              {document.description}
            </p>
          </CardBody>
        </div>

        {/* 右侧图片 */}
        <div className="hidden md:flex justify-center items-center flex-shrink-0">
          {document.thumbnail && (
            <div className="relative w-24 h-24 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
              <Image
                src={document.thumbnail}
                alt={document.title}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
