"use client";

import React from "react";
import { products } from "./products";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PostVO } from "@/types/post";

export default function Products() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-10">
        {products.map((product: PostVO, idx: number) => (
          <motion.div
            key={`product-${product.id}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={`/post/${product.id}`}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 p-4"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                height={200}
                width={200}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-lg md:text-xl">
                    {product.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    作者：{product.author} ｜ 分类：{product.category}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    发布时间：
                    {new Date(product.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm mt-3 max-w-2xl text-gray-800">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags?.map((tag, i) => (
                    <span
                      key={`${tag}-${i}`}
                      className="text-xs px-2 py-1 rounded bg-black text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
