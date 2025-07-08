"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { DocTreeItem } from "@/types/doctree"
import { usePathname } from "next/navigation"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
} from "@/components/ui/sidebar"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

// 判断当前 item 或其子孙是否匹配当前路径
function itemMatchesPath(item: DocTreeItem, pathname: string): boolean {
    if (item.url === pathname) return true
    if (item.items) {
        return item.items.some(child => itemMatchesPath(child, pathname))
    }
    return false
}

function RecursiveMenuItem({ item, depth = 0 }: { item: DocTreeItem; depth?: number }) {
    const pathname = usePathname()
    const hasChildren = item.items && item.items.length > 0

    const shouldBeOpen = itemMatchesPath(item, pathname)
    const [open, setOpen] = useState(shouldBeOpen)

    // 当路径变化时重新展开匹配项
    useEffect(() => {
        setOpen(shouldBeOpen)
    }, [pathname, shouldBeOpen])

    if (!hasChildren) {
        return (
            <SidebarMenuItem className={`rounded-md ml-${depth * 2}`}>
                <SidebarMenuButton asChild tooltip={item.title}>
                    <Link
                        href={item.url}
                        className={cn(
                            "hover:!bg-primary/10 hover:dark:!bg-primary/20",
                            pathname === item.url && "bg-primary/10 dark:bg-primary/20"
                        )}
                    >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        )
    }

    return (
        <Collapsible asChild open={open} onOpenChange={setOpen}>
            <SidebarMenuItem className={`ml-${depth * 2}`}>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight
                            className={cn(
                                "ml-auto transition-transform duration-200",
                                open && "rotate-90"
                            )}
                        />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {item.items?.map((child) => (
                            <RecursiveMenuItem key={child.title} item={child} depth={depth + 1} />
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    )
}

export function NavMain({ doctree, alias, document_id }: { doctree: DocTreeItem[], alias: string, document_id: string }) {
    const pathname = usePathname()
    return (
        <SidebarGroup>
            <SidebarGroupLabel>

                <Link
                    href={`/doc/${alias}/${document_id}`}
                    className={cn(
                        "flex items-center gap-2",
                        pathname === `/doc/${alias}/${document_id}`
                    )}
                >
                    <span>文档概览</span>
                </Link>

            </SidebarGroupLabel>
            <SidebarMenu>
                {doctree.map((item) => (
                    <RecursiveMenuItem key={item.title} item={item} depth={0} />
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
