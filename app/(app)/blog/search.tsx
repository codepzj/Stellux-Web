"use client";
import { Input, InputProps } from "@heroui/input";
import { SearchLinearIcon } from "@/components/basic/svg-icon";
import { Kbd } from "@heroui/kbd";
import { useEffect } from "react";
import { useSearch } from "./provider";

export const Search = ({ ...props }: InputProps) => {
  const { openSearch } = useSearch();
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.userAgent.includes("Mac");
      const isCtrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
      if (isCtrlOrCmd && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <>
      <Input
        {...props}
        readOnly
        disableAnimation
        classNames={{
          input: "cursor-pointer",
          inputWrapper: "cursor-pointer",
        }}
        onMouseDown={() => {
          openSearch();
        }}
        placeholder="搜索博客"
        startContent={
          <SearchLinearIcon size={20} className="text-default-500" />
        }
        endContent={
          <Kbd
            className="inline-block text-xs shadow-none rounded-sm"
            keys={["ctrl"]}
          >
            K
          </Kbd>
        }
      />
    </>
  );
};
