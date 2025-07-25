"use client";

import Link from "next/link";
import { Terminal, TypingAnimation } from "@/components/magicui/terminal";

export default function HeroSection() {
  const goCode = `package main

import "fmt"

func main() {
    fmt.Println("你好, Go语言中文网!")
}`;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Go 1.22 现已发布
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Go语言中文网
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              最全面的Go语言中文学习平台，提供高质量的中文教程、文档和社区支持，助力开发者快速掌握Go语言。
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/docs/getting-started"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                开始学习
              </Link>
              <Link
                href="/playground"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                在线运行
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full mt-12 lg:max-h-none">
            <Terminal className="aspect-video max-h-[220px] lg:max-h-none">
              <TypingAnimation
                duration={40}
                className="text-sm text-gray-800 dark:text-gray-200"
              >
                {goCode}
              </TypingAnimation>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
}
