"use client";

import { useEffect, useState } from "react";

const texts = [
  "Hi, I'm Innei👋。",
  "A NodeJS Full Stack <Developer />",
  "An independent developer coding with love.",
];

export default function TypingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < texts.length) {
      const timeout = setTimeout(() => {
        if (charIndex < texts[lineIndex].length) {
          setDisplayedText((prev) => prev + texts[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setDisplayedText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <pre className="whitespace-pre-wrap text-xl md:text-2xl font-mono leading-relaxed text-left">
      {displayedText}
    </pre>
  );
}
