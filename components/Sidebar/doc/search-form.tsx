"use client";

import { useEffect } from "react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

export function DocSearchForm({
  alias,
  id,
  ...props
}: React.ComponentProps<"form"> & { alias: string; id: string }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.userAgent.includes("Mac");
      const isCtrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
      if (isCtrlOrCmd && e.key.toLowerCase() === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Input placeholder="搜索文档" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
