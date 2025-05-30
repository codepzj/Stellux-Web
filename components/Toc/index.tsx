// @ts-nocheck
"use client";

import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import type { TableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Icon } from "@iconify/react";

interface TocProps {
  toc: TableOfContents;
  className?: string;
}

export const ScrollToc = ({ toc, className }: TocProps) => {
  return (
    <ScrollShadow className="w-48" size={0} hideScrollBar>
      <Toc toc={toc} className={className} />
    </ScrollShadow>
  );
};

export function Toc({ toc, className }: TocProps) {
  const itemIds = useMemo(
    () =>
      toc
        ? toc?.flatMap((item) => [
          item.url?.replace(/^#/, ""),
          ...(item.items?.map((subItem) => subItem.url?.replace(/^#/, "")) || []),
        ])
        : [],
    [toc]
  );

  const activeId = useActiveItem(itemIds);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!activeId) return;
    const tocItem = document.querySelector(`[data-toc-id="${activeId}"]`);
    if (tocItem) {
      tocItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  if (!toc?.length) return null;

  return (
    <nav className={cn("text-sm transition-all duration-300 z-50", className)}>
      <div className="flex justify-between items-center mb-3 px-2">
        <div className="text-default-500 font-medium tracking-wide sticky top-0 right-0">目录</div>
        <button
          className="transition-transform duration-300 text-default-500 hover:text-foreground"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Icon
            icon="mdi:chevron-down"
            className={cn(
              "w-5 h-5 transform transition-transform",
              collapsed ? "rotate-[-90deg]" : "rotate-0"
            )}
          />
        </button>
      </div>
      <div
        className={cn(
          "transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden",
          collapsed ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        )}
      >
        <Tree tree={toc} activeItem={activeId} />
      </div>
    </nav>
  );
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!itemIds.length) return;

    const handleScroll = () => {
      let current: string | null = null;
      for (const id of itemIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return (
    <ul
      className={cn(
        "space-y-[2px] pl-2",
        level === 1 && "border-l border-zinc-200 dark:border-zinc-700"
      )}
    >
      {tree.map((item, index) => {
        const itemId = item.url?.replace(/^#/, "");
        const isActive = itemId === activeItem;

        return (
          <li key={index} className="relative">
            <a
              href={item.url}
              data-toc-id={itemId}
              className={cn(
                "block text-[12px] px-1.5 py-[3px] rounded-sm transition-all duration-200",
                "hover:bg-accent/40 hover:text-foreground",
                isActive
                  ? "bg-primary/10 text-primary font-medium scale-[1.02] pl-3"
                  : "text-muted-foreground"
              )}
              style={{ transformOrigin: "left center" }}
            >
              {isActive && (
                <span className="absolute left-1 top-1/2 -translate-y-1/2 w-[3px] h-[12px] bg-primary rounded-sm" />
              )}
              {item.title}
            </a>
            {item.items?.length > 0 && (
              <div className="pl-2">
                <Tree tree={item.items} level={level + 1} activeItem={activeItem} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
