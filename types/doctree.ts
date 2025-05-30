import { LucideIcon } from "lucide-react";

export interface DocTreeItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: DocTreeItem[];
}