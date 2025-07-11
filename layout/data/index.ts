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
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
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
          url: "/wiki",
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
          title: "Secured by Clerk",
          icon: UserCog,
          items: [
            {
              title: "Sign In",
              url: "/clerk/sign-in",
            },
            {
              title: "Sign Up",
              url: "/clerk/sign-up",
            },
            {
              title: "User Management",
              url: "/clerk/user-management",
            },
          ],
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Auth",
          icon: ShieldCheck,
          items: [
            {
              title: "Sign In",
              url: "/sign-in",
            },
            {
              title: "Sign In (2 Col)",
              url: "/sign-in-2",
            },
            {
              title: "Sign Up",
              url: "/sign-up",
            },
            {
              title: "Forgot Password",
              url: "/forgot-password",
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
        {
          title: "Errors",
          icon: Bug,
          items: [
            {
              title: "Unauthorized",
              url: "/401",
              icon: Lock,
            },
            {
              title: "Forbidden",
              url: "/403",
              icon: UserRoundX,
            },
            {
              title: "Not Found",
              url: "/404",
              icon: AlertOctagon,
            },
            {
              title: "Internal Server Error",
              url: "/500",
              icon: ServerCrash,
            },
            {
              title: "Maintenance Error",
              url: "/503",
              icon: Ban,
            },
          ],
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: Settings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: UserCog,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: Wrench,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: Palette,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: Bell,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: MonitorCheck,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: HelpCircle,
        },
      ],
    },
  ],
};
