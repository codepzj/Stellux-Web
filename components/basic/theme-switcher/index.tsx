"use client";

import { useTheme } from "next-themes";
import { Tabs, Tab } from "@heroui/tabs";
import { useEffect, useState } from "react";
import { SystemIcon, SunIcon, MoonIcon } from "@/components/basic/svg-icon";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <Tabs
      defaultSelectedKey="system"
      size="sm"
      isDisabled={!mounted}
      selectedKey={mounted ? theme : undefined}
      aria-label="主题切换"
      variant="solid"
      radius="full"
      onSelectionChange={(key) => handleThemeChange(key as string)}
    >
      <Tab key="light" title={<SunIcon size={16} />} aria-label="浅色模式" />
      <Tab key="dark" title={<MoonIcon size={16} />} aria-label="深色模式" />
      <Tab
        key="system"
        title={<SystemIcon size={16} />}
        aria-label="跟随系统模式"
      />
    </Tabs>
  );
};
