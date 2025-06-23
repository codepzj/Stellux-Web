"use client";

import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { SearchIcon, Contrast } from "lucide-react";
import { PostSearchVO } from "@/types/post";
import { getPostByKeyWordAPI } from "@/api/post";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useTheme } from "next-themes";
// 高亮关键词
function highlight(text: string, key: string) {
  if (!key.trim()) return text;
  const parts = text.split(new RegExp(`(${key})`, "gi"));
  return parts.map((p, i) =>
    p.toLowerCase() === key.toLowerCase() ? (
      <span key={i} className="text-primary">
        {p}
      </span>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<PostSearchVO[]>([]);
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  // 快捷键 Ctrl+K 打开搜索框
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // 搜索逻辑
  useEffect(() => {
    const fetchData = async () => {
      const keyword = searchValue.trim();
      if (!keyword) {
        setSearchResult([]);
        return;
      }
      const res = await getPostByKeyWordAPI(keyword);
      setSearchResult(res.data || []);
    };

    fetchData();
  }, [searchValue]);

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="rounded-lg cursor-pointer bg-muted/80 transition-none hover:shadow"
      >
        <SearchIcon />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-lg cursor-pointer bg-muted/80 transition-none hover:shadow"
      >
        <Contrast size={16} />
      </Button>

      <CommandDialog
        className="top-6 translate-y-0"
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput
          placeholder="请输入搜索内容"
          value={searchValue}
          onValueChange={setSearchValue}
        />
        <CommandList>
          {searchResult.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                router.push(`/post/${item.id}`);
                setSearchValue("");
                setOpen(false);
              }}
              className="flex flex-col items-start px-4 py-2 w-full justify-start cursor-pointer"
            >
              <div className="font-medium text-base text-foreground line-clamp-2">
                {highlight(item.title, searchValue)}
              </div>
              {item.description && (
                <div className="text-sm text-default-500 line-clamp-2 mt-1">
                  {highlight(item.description, searchValue)}
                </div>
              )}
            </div>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
