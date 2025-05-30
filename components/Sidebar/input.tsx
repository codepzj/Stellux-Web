"use client";
import { Input } from "@heroui/input";
import { SearchLinearIcon } from "@/components/SvgIcon";
import { Kbd } from "@heroui/kbd";
import { useState, useEffect } from "react";
import SearchModal from "./search-modal";

export const SidebarInput = () => {
    const [isSearchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const isMac = navigator.userAgent.includes("Mac");
            const isCtrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
            if (isCtrlOrCmd && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);
    return (
        <>
            <Input
                readOnly
                disableAnimation
                classNames={{
                    input: "cursor-pointer",
                    inputWrapper: "cursor-pointer",
                }}
                onMouseDown={(e) => {
                    setSearchOpen(true);
                }}
                placeholder="搜索文档"
                startContent={<SearchLinearIcon size={20} className="text-default-500" />}
                endContent={
                    <Kbd className="inline-block text-xs shadow-none rounded-sm" keys={["ctrl"]}>
                        K
                    </Kbd>
                }
            />
            {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />}
        </>
    )
};