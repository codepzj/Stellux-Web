"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Spacer } from "@/components/Spacer";

// 打字内容
const texts = [
  "Hi, I'm Codepzj👋",
  "A Golang Full Stack <Developer />",
  "An independent developer coding with love.",
];

// 社交链接
const links = [
  {
    icon: "mdi:github",
    href: "https://github.com/codepzj",
    label: "GitHub",
  },
  {
    icon: "simple-icons:gitee",
    href: "https://gitee.com/codepzj",
    label: "Gitee",
  },
  {
    icon: "mingcute:bilibili-line",
    href: "https://space.bilibili.com/183695872",
    label: "Bilibili",
  },
  {
    icon: "mdi:twitter",
    href: "https://x.com/codepzj",
    label: "Twitter",
  },
  {
    icon: "mdi:email",
    href: "mailto:email@codepzj.cn",
    label: "Email",
  },
];

// 打字机效果组件
function Typewriter({ texts, onDone }: { texts: string[]; onDone?: () => void }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [lines, setLines] = useState<string[]>(Array(texts.length).fill(""));
  const [showCursor, setShowCursor] = useState(true);
  const typingSpeed = 22; // 更快的打字速度
  const cursorRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 闪烁光标
    cursorRef.current = setInterval(() => setShowCursor((v) => !v), 400);
    return () => {
      if (cursorRef.current) clearInterval(cursorRef.current);
    };
  }, []);

  useEffect(() => {
    if (lineIndex < texts.length) {
      const timeout = setTimeout(() => {
        const currentLine = texts[lineIndex];
        const currentChar = currentLine[charIndex];
        setLines((prev) => {
          const newLines = [...prev];
          newLines[lineIndex] += currentChar;
          return newLines;
        });

        if (charIndex < currentLine.length - 1) {
          setCharIndex((prev) => prev + 1);
        } else {
          if (lineIndex === texts.length - 1) {
            onDone?.();
          }
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, texts, onDone]);

  return (
    <div className="text-left font-mono leading-relaxed">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
        {lines[0]}
        {lineIndex === 0 && showCursor && <span className="animate-pulse text-primary">|</span>}
      </p>
      <Spacer y={2} />
      <p className="text-base md:text-lg lg:text-xl mt-2 mb-2">
        {lines[1]}
        {lineIndex === 1 && showCursor && <span className="animate-pulse text-primary">|</span>}
      </p>
      <p className="text-sm md:text-base lg:text-lg text-muted-foreground mt-2">
        {lines[2]}
        {lineIndex === 2 && showCursor && <span className="animate-pulse text-primary">|</span>}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [isTypingDone, setIsTypingDone] = useState(false);

  return (
    <section className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter texts={texts} onDone={() => setIsTypingDone(true)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <Image
              src="https://avatars.githubusercontent.com/u/183695872?v=4"
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-6 bg-primary/10 blur-lg rounded-full z-0" />
          </div>
        </motion.div>
      </div>

      {/* 图标整体下移，间距更自然 */}
      <motion.div
        className="mt-20 flex gap-4 sm:gap-6 flex-wrap justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isTypingDone ? 1 : 0, scale: isTypingDone ? 1 : 0.95 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        style={{ pointerEvents: isTypingDone ? "auto" : "none" }}
      >
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.13 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="p-3 rounded-full border border-border bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-md hover:bg-gradient-to-br hover:from-primary/30 hover:to-secondary/30 transition-all shadow-md hover:shadow-xl duration-300 ease-in-out flex items-center justify-center">
              <Icon
                icon={link.icon}
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300"
              />
            </div>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white bg-black/80 dark:bg-white/10 backdrop-blur-sm ring-1 ring-border rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
