'use client'

import Link from 'next/link'
import { Terminal, TypingAnimation } from '@/components/magicui/terminal'

export default function HeroSection() {
  const goCode = `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go语言中文网!")
}`

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Go 1.24 现已发布
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent dark:from-white dark:via-blue-200 dark:to-indigo-200">
              Go语言中文网
            </h1>
            <p className="max-w-[600px] text-lg text-gray-600 md:text-xl/relaxed dark:text-gray-300">
              最全面的Go语言中文学习平台，提供高质量的中文教程、文档和社区支持，助力开发者快速掌握Go语言。
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link
                href="https://go.dev/doc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                官方文档
              </Link>
              <Link
                href="https://go.dev/play/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-8 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:border-gray-600"
              >
                在线运行
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>官方支持</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>中文社区</span>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl"></div>
              <Terminal className="relative aspect-video max-h-[280px] lg:max-h-none rounded-xl border-0 shadow-2xl">
                <TypingAnimation
                  duration={40}
                  className="text-sm text-gray-800 dark:text-gray-200 font-mono"
                >
                  {goCode}
                </TypingAnimation>
              </Terminal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
