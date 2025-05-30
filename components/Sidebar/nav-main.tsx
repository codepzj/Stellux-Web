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

function RecursiveMenuItem({ item, depth = 0 }: { item: DocTreeItem; depth?: number }) {
    const hasChildren = item.items && item.items.length > 0;
    const pathname = usePathname()

    // 没有子项时，使用 SidebarMenuItem 直接展示
    if (!hasChildren) {
        return (
            <SidebarMenuItem className={`rounded-md ml-${depth * 2}`}>
                <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url} className={`hover:!bg-primary/10 hover:dark:!bg-primary/20 ${pathname === item.url ? "bg-primary/10 dark:bg-primary/20" : ""}`}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        )
    }

    // 有子项时，使用可折叠的结构
    return (
        <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
        >
            <SidebarMenuItem className={`ml-${depth * 2}`}>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
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

export function NavMain({ items }: { items: DocTreeItem[] }) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>文档</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <RecursiveMenuItem key={item.title} item={item} depth={0} />
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
