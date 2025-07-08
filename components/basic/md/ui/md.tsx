import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import { cn } from "@/lib/utils";
import CopyButton from "./copy";
import MdImage from "./image";
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
    <div className={cn("markdown-body", className)}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 id={`header-${index++}`} className="font-sans">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={`header-${index++}`} className="!border-none font-sans">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="!border-none font-sans">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="!border-none font-sans">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="!border-none font-sans">{children}</h6>
          ),
          p: ({ children }) => (
            <p className="leading-7 text-foreground">{children}</p>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <MdImage src={src as string} alt={alt as string} />
          ),
          ul: ({ children }) => (
            <ul className="list-disc !ml-0 !pl-4 text-foreground">{children}</ul>
          ),
          pre: ({ children }) => (
            <pre className="rounded-md bg-zinc-100 dark:bg-zinc-900 !p-0">
              {children}
            </pre>
          ),
          code: ({ node, className, children }) => {
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
                <div className="not-prose relative rounded-md">
                  <div
                    className="overflow-x-auto p-4 bg-zinc-100 dark:bg-zinc-900/50 rounded-b-md relative"
                    id={id}
                  >
                    <CopyButton
                      className="absolute top-1.5 right-1.5"
                      id={id}
                    />
                    {children}
                  </div>
                </div>
              );
            }

            // 单行代码块
            return (
              <code className="rounded-md bg-muted px-1 py-0.5 text-sm font-mono text-foreground">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
