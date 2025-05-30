"use client"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronsUpDown, GalleryVerticalEnd } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function DocTitle({
  thumbnail,
  title
}: {
  thumbnail?: string;
  title: string;
}) {
  const router = useRouter();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                {thumbnail ? <Image className="w-full h-full object-cover bg-white dark:bg-black rounded-xs border-0.5 border-default-500" src={thumbnail} alt={title} width={32} height={32} /> : <GalleryVerticalEnd className="size-4" />}
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium cursor-pointer">{title}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            <DropdownMenuItem>
              <div className="w-full cursor-pointer" onClick={() => {
                router.push("/doc");
                router.refresh();
              }}>
                退出文档
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
