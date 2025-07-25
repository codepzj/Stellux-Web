import {
  IconHome,
  IconBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
  IconMessageCircle,
  IconPackage,
  IconUsers,
  IconCode,
} from "@tabler/icons-react";

export const DATA = {
  name: "Go语言中文网",
  initials: "Go",
  url: "https://go.dev",
  location: "中国",
  locationLink: "https://www.google.com/maps/place/china",
  description:
    "最全面的Go语言中文学习平台, 提供高质量的中文教程、文档和社区支持, 助力开发者快速掌握Go语言。",
  summary:
    "Go语言是由Google开发的一种静态强类型、编译型、并发型, 并具有垃圾回收功能的编程语言。Go语言专门针对多处理器系统应用程序的编程进行了优化, 使用Go编译的程序可以媲美C或C++代码的速度, 而且更加安全、支持并行进程。Go语言中文网致力于为中国开发者提供最全面的Go语言学习资源和交流平台。",
  avatarUrl: "/go-logo.png",
  skills: [
    "Web开发",
    "微服务",
    "并发编程",
    "系统编程",
    "云原生",
    "Docker",
    "Kubernetes",
    "数据库",
    "API开发",
    "DevOps",
  ],
  navbar: [
    { href: "/", icon: IconHome, label: "首页" },
    { href: "/docs", icon: IconBook, label: "文档" },
    { href: "/tutorials", icon: IconCode, label: "教程" },
    { href: "/packages", icon: IconPackage, label: "包索引" },
    { href: "/community", icon: IconUsers, label: "社区" },
    { href: "/blog", icon: IconMessageCircle, label: "博客" },
  ],
  contact: {
    email: "contact@golang.cn",
    tel: "+86123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/golang",
        icon: IconBrandGithub,
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/golang",
        icon: IconBrandTwitter,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/google",
        icon: IconBrandLinkedin,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/c/golang",
        icon: IconBrandYoutube,
        navbar: true,
      },
      email: {
        name: "发送邮件",
        url: "mailto:contact@golang.cn",
        icon: IconMail,
        navbar: false,
      },
    },
  },
} as const;
