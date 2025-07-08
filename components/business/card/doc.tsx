"use client";

import { DocumentRootVO } from "@/types/doc";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { dayFormat, timeBeforeNow } from "@/utils/day";
import { Calendar, Clock } from "lucide-react";
import { Ripple } from "@/components/basic/ripple";
import { Badge } from "@/components/ui/badge";
import { H3 } from "@/components/basic/typography";

export function DocCard({ doc, idx }: { doc: DocumentRootVO; idx: number }) {
  return (
    <motion.div
      key={`doc-${doc.id}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: idx * 0.05 }}
    >
      <Ripple className="rounded-2xl">
        <Link
          href={`/doc/${doc.id}`}
          className="group flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 hover:bg-gray-100 dark:bg-zinc-900/80 dark:hover:bg-zinc-800/80 transition duration-300 p-4"
        >
          {/* 缩略图 */}
          <Image
            src={doc.thumbnail}
            alt={doc.title}
            width={192}
            height={108}
            className="rounded-lg object-cover w-48 h-36 md:block hidden"
          />

          {/* 内容区 */}
          <div className="flex flex-col justify-between flex-1 gap-2">
            {/* 标题与标签 */}
            <div className="flex flex-col gap-2">
              <H3>{doc.title}</H3>

              <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-1.5">
                <Badge variant="outline">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>发布于：{dayFormat(doc.created_at)}</span>
                </Badge>
                <Badge variant="outline">
                  <Clock className="w-4 h-4 mr-1" />
                  {timeBeforeNow(doc.updated_at)}
                </Badge>
              </div>
            </div>

            {/* 描述 */}
            <div className="text-sm text-foreground line-clamp-2 md:line-clamp-1">
              {doc.description || "暂无描述"}
            </div>
          </div>
        </Link>
      </Ripple>
    </motion.div>
  );
}
