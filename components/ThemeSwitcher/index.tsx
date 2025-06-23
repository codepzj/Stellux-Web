"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return mounted ? (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
      className="rounded-lg cursor-pointer bg-muted/80 hover:shadow"
    >
      {theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </Button>
  ) : null;
};

