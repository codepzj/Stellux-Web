"use client";

import { usePathname, useRouter } from "next/navigation";
import { PostIcon, DocIcon, AboutIcon } from "@/components/basic/svg-icon";
import { LayoutDashboard, Book } from "lucide-react";
import { Button } from "@heroui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@heroui/react";

const navItems = [
  {
    label: "首页",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    label: "文章",
    icon: PostIcon,
    path: "/post", // 首页或 /post/** 都认为是文章
  },
  {
    label: "文档",
    icon: DocIcon,
    path: "/doc",
  },
  {
    label: "关于",
    icon: AboutIcon,
    path: "/about",
  },
];

export const LinkGroup = () => {
  const { setOpenMobile } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {navItems.map(({ label, icon: Icon, path }) => {
        // 首页需要特殊处理
        const isActive =
          path === pathname;

        return (
          <Button
            key={label}
            variant="light"
            className={cn(
              "flex items-center gap-2 justify-start cursor-pointer rounded-xl",
              { "bg-default-500/20": isActive }
            )
          }
            onPress={() => {
              router.push(path);
              setOpenMobile(false);
            }}
          >
            <Icon aria-label={label} className="text-default-500" />
            <span>{label}</span>
          </Button>
        );
      })}
    </div>
  );
};
