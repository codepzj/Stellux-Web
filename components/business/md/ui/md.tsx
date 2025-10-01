'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import CopyButton from './copy'
import { Image } from '@heroui/image'
import './md.css'
import { cn } from '@/lib/utils'
import { Alert } from '@heroui/alert'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

// 引入mermaid
import mermaid from 'mermaid'

// 引入katex
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

// Mermaid渲染组件
const Mermaid = ({ code }: { code: string }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current) {
      const id = 'mermaid-' + Math.random().toString(36).slice(2, 11)
      ref.current.id = id
      mermaid.initialize({ startOnLoad: false })
      ref.current.innerHTML = ''
      mermaid
        .render(id + '-svg', code)
        .then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg
          }
        })
        .catch((e: any) => {
          console.error(e)
          if (ref.current) {
            ref.current.innerHTML = `<pre>${code}</pre>`
          }
        })
    }
  }, [code])

  return <div ref={ref} className="my-4 grid grid-cols-1 place-items-center overflow-x-auto" />
}

// 递归遍历AST，给所有h2/h3节点分配唯一id
function addHeaderIds(ast: any) {
  let headerIndex = 1
  function traverse(node: any) {
    if (!node) return
    if (Array.isArray(node)) {
      node.forEach(traverse)
      return
    }
    if (node.type === 'heading' && (node.depth === 2 || node.depth === 3)) {
      node.data = node.data || {}
      node.data.hProperties = node.data.hProperties || {}
      node.data.id = `header-${headerIndex++}`
      node.data.hProperties.id = node.data.id
    }
    if (node.children) {
      traverse(node.children)
    }
  }
  traverse(ast)
}

export default function Md({ content, className }: { content: string; className?: string }) {
  // 通过remark插件给h2/h3加唯一id
  const addHeaderIdPlugin = () => (tree: any) => {
    addHeaderIds(tree)
  }

  // 类型保护函数，安全获取id
  function getHeaderId(node: any): string | undefined {
    // rehype/remark 可能把id放在data.id 或 data.hProperties.id
    return node?.data?.id || node?.data?.hProperties?.id
  }

  let photoIndex = 0

  return (
    <PhotoProvider>
      <article className={cn('markdown-body', className)}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
          remarkPlugins={[remarkGfm, remarkMath, addHeaderIdPlugin]}
          components={{
            h2: ({ node, children, ...props }) => (
              <h2
                id={getHeaderId(node)}
                className="scroll-m-20 border-b border-gray-200 dark:border-gray-700 pb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 first:mt-0 my-8"
                {...props}
              >
                {children}
              </h2>
            ),
            h3: ({ node, children, ...props }) => (
              <h3
                id={getHeaderId(node)}
                className="scroll-m-20 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 my-6"
                {...props}
              >
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 my-4">
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className="mt-4 leading-relaxed text-gray-800 dark:text-gray-200 text-base font-normal">
                {children}
              </p>
            ),
            blockquote: ({ children }) => {
              return <Alert className="blockquote" color="default" title={children} />
            },

            table: ({ children }) => (
              <table className="mt-6 w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                {children}
              </table>
            ),
            tr: ({ children }) => (
              <tr className="even:bg-gray-50 dark:even:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                {children}
              </tr>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 [&[align=center]]:text-center [&[align=right]]:text-right">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 text-left align-top text-gray-800 dark:text-gray-200 [&[align=center]]:text-center [&[align=right]]:text-right">
                {children}
              </td>
            ),
            ul: ({ children }) => (
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-800 dark:text-gray-200">
                {children}
              </ol>
            ),
            img: ({ src, alt }) => (
              <PhotoView src={src as string} key={photoIndex++}>
                <Image className="my-6 rounded-md" src={src as string} alt={alt as string} />
              </PhotoView>
            ),
            a: ({ children, href }) => (
              <a
                href={href as string}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 transition-colors duration-200"
              >
                {children}
              </a>
            ),
            pre: ({ children }) => (
              <pre className="rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 !p-0.5 my-6 overflow-x-auto text-sm">
                {children}
              </pre>
            ),
            code: ({ className, children }) => {
              const match = /language-(\w+)/.exec(className || '')
              const count =
                React.Children.toArray(children).length === 1
                  ? (React.Children.toArray(children)[0].toString().match(/\n/g) || []).length
                  : 0

              // 支持mermaid
              if (match && match[1] === 'mermaid') {
                // 只取children的文本内容
                const code =
                  typeof children === 'string'
                    ? children
                    : React.Children.toArray(children)
                        .map((c) => (typeof c === 'string' ? c : ''))
                        .join('')
                return <Mermaid code={code} />
              }
              if (match?.length || count > 0) {
                const id = Math.random().toString(36).slice(2, 11)
                return (
                  <div className="not-prose relative rounded-md text-sm">
                    <div
                      className="overflow-x-auto p-4 bg-zinc-100 dark:bg-zinc-900/50 rounded-b-md"
                      id={id}
                      suppressHydrationWarning
                    >
                      <CopyButton className="absolute top-1.5 right-1.5" copyId={id} />
                      {children}
                    </div>
                  </div>
                )
              }

              // 单行代码块
              return (
                <code className="rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-sm text-gray-800 dark:text-gray-200 font-mono border border-gray-200 dark:border-gray-700">
                  {children}
                </code>
              )
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </PhotoProvider>
  )
}
