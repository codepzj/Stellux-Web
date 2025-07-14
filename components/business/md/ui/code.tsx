"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

export function CodeBlock({
  code,
  lang,
  options,
}: {
  code: string;
  lang: string;
  options?: Parameters<typeof DynamicCodeBlock>[0]["options"];
}) {
  return (
    <DynamicCodeBlock
      lang={lang}
      code={code}
      options={{
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        ...options,
      }}
    />
  );
}
