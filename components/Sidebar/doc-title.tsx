"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function DocTitle({
  thumbnail,
  title
}: {
  thumbnail?: string;
  title: string;
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
       
            <SidebarMenuButton
              size="lg"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                {thumbnail && <Image className="w-full h-full object-cover bg-white dark:bg-black rounded-xs border-0.5 border-default-500" src={thumbnail} alt={title} width={32} height={32} />}
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">{title}</span>
              </div>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
