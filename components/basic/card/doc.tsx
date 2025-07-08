"use client";

import { DocumentRootVO } from "@/types/doc";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { dayFormat } from "@/utils/day";
import { ClockIcon } from "lucide-react";

export function DocCard({ doc, idx }: { doc: DocumentRootVO; idx: number }) {
  return (
    <motion.div
      key={`doc-${doc.id}`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: idx * 0.05 }}
    >
      <Link
        href={`/doc/${doc.id}`}
        className="group flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-2xl transition duration-200 p-4"
      >
        <Image
          src={doc.thumbnail}
          alt={doc.title}
          width={192}
          height={144}
          className="rounded-lg object-cover w-48 h-36 md:block hidden"
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {doc.title}
            </h4>

            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-1.5">
              <ClockIcon className="w-4 h-4" />
              <span>发布于：{dayFormat(doc.created_at)}</span>
              <span>｜更新于：{dayFormat(doc.updated_at)}</span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-1 line-clamp-2">
              {doc.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
