"use client";
import { Input } from "@heroui/input";
import { SearchLinearIcon } from "@/components/SvgIcon";
import { Kbd } from "@heroui/kbd";
import { useEffect } from "react";
import useConfigStore from "@/store/config";

export const BlogSearch = () => {
    const { setBlogSearchOpen } = useConfigStore();
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const isMac = navigator.userAgent.includes("Mac");
            const isCtrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
            if (isCtrlOrCmd && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setBlogSearchOpen(true);
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
                onMouseDown={() => {
                    setBlogSearchOpen(true);
                }}
                placeholder="搜索博客"
                startContent={<SearchLinearIcon size={20} className="text-default-500" />}
                endContent={
                    <Kbd className="inline-block text-xs shadow-none rounded-sm" keys={["ctrl"]}>
                        K
                    </Kbd>
                }
            />
        </>
    )
};