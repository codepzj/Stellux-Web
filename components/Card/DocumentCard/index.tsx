"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { WikiIcon } from "@/components/SvgIcon";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DocumentRootVO } from "@/types/doc";

export const DocumentCard = ({
  document,
  className,
}: {
  document: DocumentRootVO;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.1 }}
      className={cn(
        "w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-background shadow-sm hover:shadow-lg hover:shadow-primary/10 cursor-pointer",
        className
      )}
      onClick={() => router.push(`/doc/${document.alias}/${document.id}`)}
    >
      <div className="group relative flex flex-col md:flex-row gap-4 p-6">
        {/* 左侧内容区 */}
        <div className="flex flex-col justify-center flex-1 gap-2 text-foreground">
          <div className="flex items-center gap-2">
            <WikiIcon className="w-5 h-5 text-primary" />
            <h3
              className="text-base md:text-lg font-semibold truncate"
              title={document.title}
            >
              {document.title}
            </h3>
          </div>

          {document.description && (
            <p
              className="text-sm text-muted-foreground leading-relaxed line-clamp-2"
              title={document.description}
            >
              {document.description}
            </p>
          )}
        </div>

        {/* 大屏右侧缩略图 */}
        {document.thumbnail && (
          <div className="hidden md:flex md:w-[96px] items-center justify-center">
            <div className="rounded-lg overflow-hidden w-full">
              <Image
                src={document.thumbnail}
                alt={document.title}
                width={96}
                height={96}
                loading="lazy"
                className="object-contain max-h-24"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
