"use client";

import { useState, useEffect } from "react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar"
import { Input } from "@heroui/input"
import { SearchLinearIcon } from "@/components/SvgIcon"
import { Kbd } from "@heroui/kbd"
import DocSearchModal from "@/components/SearchModal/doc"

export function DocSearchForm({ alias, id, ...props }: React.ComponentProps<"form"> & { alias: string, id: string }) {
  const [docSearchOpen, setDocSearchOpen] = useState(false);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.userAgent.includes("Mac");
      const isCtrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
      if (isCtrlOrCmd && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setDocSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Input
            readOnly
            disableAnimation
            classNames={{
              input: "cursor-pointer",
              inputWrapper: "cursor-pointer",
            }}
            onMouseDown={() => {
              setDocSearchOpen(true);
            }}
            placeholder="搜索文档"
            startContent={<SearchLinearIcon size={20} className="text-default-500" />}
            endContent={
              <Kbd className="inline-block text-xs shadow-none rounded-sm" keys={["ctrl"]}>
                K
              </Kbd>
            }
          />
        </SidebarGroupContent>
      </SidebarGroup>
      <DocSearchModal alias={alias} id={id} docSearchOpen={docSearchOpen} onDocSearchClose={() => setDocSearchOpen(false)} />
    </form>
  )
}
