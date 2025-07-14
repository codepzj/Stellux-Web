"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";
import { ZoomImage } from "./image";
import { CodeBlock } from "./code";
import Link from "next/link";
import "./md.css";

export default function Md({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  let index = 1;

  return (
    <article
      className={cn(
        "prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert",
        "prose-headings:scroll-m-20 prose-headings:tracking-tight",
        className
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => <h2 id={`header-${index++}`}>{children}</h2>,
          h3: ({ children }) => <h3 id={`header-${index++}`}>{children}</h3>,
          p: ({ children }) => <p className="mt-4 leading-7">{children}</p>,
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-2 border-muted pl-6 italic ">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <table className="mt-6 w-full border">{children}</table>
          ),
          tr: ({ children }) => (
            <tr className="even:bg-muted border-t">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border px-4 py-2 text-left align-top [&[align=center]]:text-center [&[align=right]]:text-right">
              {children}
            </td>
          ),
          ul: ({ children }) => (
            <ul className="mt-4 ml-2 list-disc [&>li]:mt-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-4 ml-2 list-decimal [&>li]:mt-2">{children}</ol>
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
            <pre className="!p-0 !bg-transparent mt-4">{children}</pre>
          ),
          figure: ({ children }) => (
            <figure className="mt-6">{children}</figure>
          ),
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || "");
            const codeText = String(children).replace(/\n$/, "");
            const lineCount = codeText.split("\n").length;
            const isBlock = match || lineCount > 1;

            if (isBlock) {
              return <CodeBlock code={codeText} lang={match?.[1] || "txt"} />;
            }

            return (
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
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
