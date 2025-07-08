import React, { useRef } from "react";
import "./index.css";
import { cn } from "@/lib/utils";

export const Ripple = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const createRipple = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const ripple = document.createElement("span");

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    container.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600); // 动画持续时间
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onClick={createRipple}
    >
      {children}
    </div>
  );
};
