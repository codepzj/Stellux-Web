"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconButton } from "@/components/Button/icon";
import { Separator } from "@/components/ui/separator";
import { Book, FileText, Home, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogConfigAPI } from "@/api/config";
import { ButtonGroup } from "./button-group";
import { BlogConfigVO } from "@/types/config";
import { usePathname } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

const navItems = [
  { label: "首页", icon: Home, path: "/" },
  { label: "文章", icon: FileText, path: "/blog" },
  { label: "文档", icon: Book, path: "/doc" },
  { label: "关于", icon: User, path: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogConfig, setBlogConfig] = useState<BlogConfigVO | null>(null);
  const pathname = usePathname();

  const isActiveClass = (path: string) =>
    pathname === path ? "text-primary" : "text-muted-foreground";

  useEffect(() => {
    getBlogConfigAPI().then((res) => setBlogConfig(res.data));
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const MobileTopBar = () => (
    <div
      className={`bg-background flex h-14 items-center justify-between ${
        !isMenuOpen ? "border-b border-border" : ""
      }`}
    >
      <IconButton icon={Menu} onClick={toggleMenu}>
        <span
          className={`absolute transition-all duration-300 ${
            isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        >
          <Menu />
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        >
          <X />
        </span>
      </IconButton>
    </div>
  );

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => {
    const linkClasses = `font-medium ${isMobile ? "text-base" : "text-sm"} ${
      isMobile
        ? "text-muted-foreground"
        : "text-muted-foreground hover:bg-primary/5"
    } px-3 py-2 rounded-md`;

    return (
      <>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`${linkClasses} ${isActiveClass(item.path)}`}
            onClick={() => setIsMenuOpen(false)} // 点击后关闭菜单
          >
            <div className="flex items-center gap-x-2">
              {isMobile ? <item.icon className="w-4 h-4" /> : null}
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </>
    );
  };

  return (
    <>
      {/* Desktop */}
      <nav className="border-border bg-background hidden h-16 border-b shadow-none lg:block">
        <div className="container mx-auto flex h-full items-center justify-between px-6">
          <div className="flex items-center gap-x-2">
            <Link href="/">
              {blogConfig?.blog_avatar ? (
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={blogConfig.blog_avatar}
                    alt={blogConfig.blog_title || "logo"}
                  />
                </Avatar>
              ) : (
                <Skeleton className="w-10 h-10 rounded-full" />
              )}
            </Link>
            <span className="relative top-0.5 text-lg font-semibold">
              {blogConfig?.blog_title}
            </span>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1">
              <NavItems />
            </div>
            <ButtonGroup />
          </div>
        </div>
      </nav>

      {/* Mobile TopBar */}
      <nav className="lg:hidden relative z-50">
        <MobileTopBar />
      </nav>

      {/* Mobile Floating Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-2 right-0 z-50 border bg-background/90 backdrop-blur-sm rounded-lg lg:hidden">
          <div className="flex flex-col">
            <div className="flex-grow overflow-y-auto p-2">
              <div className="flex flex-col gap-y-1">
                <NavItems isMobile={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
