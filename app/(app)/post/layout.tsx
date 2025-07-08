"use client";

import { Header } from "@/layout/header";
import { TopNav } from "@/layout/top-nav";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switcher";
import { topNav } from "@/constrant/topnav-data";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ThemeSwitch />
        </div>
      </Header>
      {children}
    </div>
  );
}