import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

import { DocSearchForm } from "./search-form"
import { NavMain } from "./nav-main"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { ChevronsUpDown } from "lucide-react"
import Link from "next/link"
import { DocTitle } from "./title"
import { DocTreeItem } from "@/types/doctree"

export async function DocSidebar({ docTitle, docThumbnail, doctree, className, alias, document_id }: { docTitle: string, docThumbnail: string, doctree: DocTreeItem[], className?: string, alias: string, document_id: string }) {
    return (
        <Sidebar collapsible="offcanvas" variant="sidebar" className={className}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                >
                                    <DocTitle docTitle={docTitle} docThumbnail={docThumbnail} />
                                    <ChevronsUpDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-(--radix-dropdown-menu-trigger-width)"
                                align="start"
                            >
                                <DropdownMenuItem>
                                    <Link href="/doc" className="w-full cursor-pointer">
                                        退出文档
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <DocSearchForm alias={alias} id={document_id} />
                <NavMain doctree={doctree} alias={alias} document_id={document_id} />
            </SidebarContent>
            <SidebarFooter>
                <div className="flex justify-center items-center">
                    <ThemeSwitcher />
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
