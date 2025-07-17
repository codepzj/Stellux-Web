"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { ZoomImage } from "./image";
import CopyButton from "./copy";
import Link from "next/link";
import "./md.css";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { Alert } from "@heroui/react";

export default function Md({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  let index = 1;

  return (
    <article className={cn("font-main markdown-body", className)}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2
              id={`header-${index++}`}
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-6"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={`header-${index++}`}
              className="scroll-m-20 text-2xl font-semibold tracking-tight my-4"
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-2">
              {children}
            </h4>
          ),
          p: ({ children }) => <p className="mt-4 leading-7">{children}</p>,
          blockquote: ({ children }) => {
            return (
              <Alert
                className="blockquote"
                color="primary"
                title={children}
              />
            );
          },

          table: ({ children }) => (
            <table className="mt-6 w-full border">{children}</table>
          ),
          tr: ({ children }) => (
            <tr className="even:bg-muted border-t">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-left align-top [&[align=center]]:text-center [&[align=right]]:text-right">
              {children}
            </td>
          ),
          ul: ({ children }) => (
            <ul className="mt-4 list-disc [&>li]:mt-2 [&>li]:ml-0">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-4 list-decimal [&>li]:mt-2 [&>li]:ml-0">
              {children}
            </ol>
          ),
          img: ({ src, alt }) => (
            <ZoomImage
              className="my-6"
              src={src as string}
              alt={alt as string}
            />
          ),
          a: ({ children, href }) => (
            <Link href={href as string} className="text-primary">
              {children}
            </Link>
          ),
          pre: ({ children }) => (
            <pre className="rounded-md bg-zinc-100 dark:bg-zinc-900 !p-0 my-4 overflow-x-auto">
              {children}
            </pre>
          ),
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || "");
            const count =
              React.Children.toArray(children).length === 1
                ? (
                    React.Children.toArray(children)[0]
                      .toString()
                      .match(/\n/g) || []
                  ).length
                : 0;

            if (match?.length || count > 0) {
              const id = Math.random().toString(36).slice(2, 11);
              return (
                <div className="not-prose relative rounded-md text-sm">
                  <div
                    className="overflow-x-auto p-4 bg-zinc-100 dark:bg-zinc-900/50 rounded-b-md"
                    id={id}
                    suppressHydrationWarning
                  >
                    <CopyButton
                      className="absolute top-1.5 right-1.5"
                      copyId={id}
                    />
                    {children}
                  </div>
                </div>
              );
            }

            // 单行代码块
            return (
              <code className="font-main rounded-md bg-muted px-2 mx-1 py-0.5 text-sm text-foreground">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
