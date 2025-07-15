import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  ListChecks,
  Boxes,
  MessageCircle,
  Users,
  UserCog,
  UserRoundX,
  Lock,
  ShieldCheck,
  Bug,
  LockKeyhole,
  AlertOctagon,
  ServerCrash,
  Ban,
  Settings,
  Wrench,
  Palette,
  Bell,
  MonitorCheck,
  HelpCircle,
  BookOpen,
  BookMarked,
  Tag,
  Link,
  User,
  Book,
  Info,
} from "lucide-react";
import { type SidebarData } from "../types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "首页",
          url: "/",
          icon: LayoutDashboard,
        },
        {
          title: "文章",
          url: "/post",
          icon: Book,
        },
        {
          title: "文档",
          url: "/doc",
          icon: BookOpen,
        },
        {
          title: "分类",
          url: "/category",
          icon: BookMarked,
        },
        {
          title: "标签",
          url: "/tag",
          icon: Tag,
        },
        {
          title: "朋友",
          url: "/friend",
          icon: Users,
        },
        {
          title: "关于",
          url: "/about",
          icon: Info,
        },
        {
          title: "测试",
          url: "/test",
          icon: Bug,
        },
      ],
    },
  ],
};
