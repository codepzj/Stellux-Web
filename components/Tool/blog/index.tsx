"use client"

import { useState } from "react";
import SearchModal from "@/components/SearchModal/blog";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftIcon,SearchIcon,ArrowUp } from 'lucide-react';

export default ({ className }: { className?: string }) => {
    const { toggleSidebar } = useSidebar();
    const [isSearchOpen, setSearchOpen] = useState(false);
    const onReturnTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className={cn("w-12 flex flex-col gap-4 border-small border-default-200 dark:border-zinc-900 bg-default-100 dark:bg-dark rounded-small p-2", className)}>
            <span key="toggle-sidebar" aria-label="切换主题" className="flex items-center justify-center !gap-0">
                <button suppressHydrationWarning
                    onClick={() => toggleSidebar()}
                    aria-label="侧边栏"
                    className="cursor-pointer !gap-0 !p-0 hover:outline-none"
                >
                    <PanelLeftIcon className='text-default-500' size={20} aria-label="侧边栏" />
                </button>
            </span>
            <span key="search" aria-label="搜索" className="flex items-center justify-center !gap-0">
                <button
                    onClick={() => setSearchOpen(true)}
                    aria-label="搜索"
                    className="cursor-pointer !gap-0 !p-0 hover:outline-none"
                >
                    <SearchIcon className='text-default-500' size={20} aria-label="搜索" />
                </button>
            </span>
            <span key="top" aria-label="返回顶部" className="flex items-center justify-center !gap-0">
                <button
                    onClick={onReturnTop}
                    aria-label="返回顶部"
                    className="cursor-pointer !gap-0 !p-0 outline-none hover:outline-none"
                >
                    <ArrowUp className='text-default-500' size={20} aria-label="返回顶部" />
                </button>
            </span>
            {/* 搜索组件 */}
            {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />}
        </div>
    )
}
