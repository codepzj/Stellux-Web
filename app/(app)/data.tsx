import {
  HomeIcon,
  BookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  MailIcon,
  MessageSquareIcon,
  PackageIcon,
  UsersIcon,
  CodeIcon,
  GlobeIcon,
} from "lucide-react";

export const DATA = {
  name: "Go语言中文网",
  initials: "Go",
  url: "https://golang.cn",
  location: "中国",
  locationLink: "https://www.google.com/maps/place/china",
  description:
    "最全面的Go语言中文学习平台，提供高质量的中文教程、文档和社区支持，助力开发者快速掌握Go语言。",
  summary:
    "Go语言是由Google开发的一种静态强类型、编译型、并发型，并具有垃圾回收功能的编程语言。Go语言专门针对多处理器系统应用程序的编程进行了优化，使用Go编译的程序可以媲美C或C++代码的速度，而且更加安全、支持并行进程。Go语言中文网致力于为中国开发者提供最全面的Go语言学习资源和交流平台。",
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
    { href: "/", icon: HomeIcon, label: "首页" },
    { href: "/docs", icon: BookIcon, label: "文档" },
    { href: "/tutorials", icon: CodeIcon, label: "教程" },
    { href: "/packages", icon: PackageIcon, label: "包索引" },
    { href: "/community", icon: UsersIcon, label: "社区" },
    { href: "/blog", icon: MessageSquareIcon, label: "博客" },
  ],
  contact: {
    email: "contact@golang.cn",
    tel: "+86123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/golang-china",
        icon: GithubIcon,
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/golangchina",
        icon: TwitterIcon,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/company/golang-china",
        icon: LinkedinIcon,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/c/golangchina",
        icon: YoutubeIcon,
        navbar: true,
      },
      email: {
        name: "发送邮件",
        url: "mailto:contact@golang.cn",
        icon: MailIcon,
        navbar: false,
      },
    },
  },

  team: [
    {
      name: "张三",
      role: "创始人 & 首席开发者",
      bio: "资深Go语言专家，拥有10年以上Go语言开发经验，曾参与多个大型开源项目的开发。",
      avatar: "/team/zhangsan.png",
      social: {
        github: "https://github.com/zhangsan",
        twitter: "https://twitter.com/zhangsan",
      }
    },
    {
      name: "李四",
      role: "技术总监",
      bio: "专注于Go语言微服务和云原生应用开发，拥有丰富的企业级应用开发经验。",
      avatar: "/team/lisi.png",
      social: {
        github: "https://github.com/lisi",
        twitter: "https://twitter.com/lisi",
      }
    },
    {
      name: "王五",
      role: "内容主管",
      bio: "技术文档专家，负责Go语言中文网的教程、文档和翻译工作，致力于提供高质量的中文学习资源。",
      avatar: "/team/wangwu.png",
      social: {
        github: "https://github.com/wangwu",
        twitter: "https://twitter.com/wangwu",
      }
    },
    {
      name: "赵六",
      role: "社区经理",
      bio: "负责Go语言中文社区的运营和管理，组织线上线下活动，促进开发者交流和学习。",
      avatar: "/team/zhaoliu.png",
      social: {
        github: "https://github.com/zhaoliu",
        twitter: "https://twitter.com/zhaoliu",
      }
    },
  ],

  courses: [
    {
      title: "Go语言基础入门",
      href: "/courses/go-basics",
      level: "初级",
      duration: "4周",
      lessons: 20,
      description: "从零开始学习Go语言的基础语法、数据类型、控制结构、函数和包管理等核心概念。适合编程新手和想要学习Go的开发者。",
      image: "/courses/go-basics.png",
      tags: ["基础", "语法", "入门"]
    },
    {
      title: "Go并发编程实战",
      href: "/courses/go-concurrency",
      level: "中级",
      duration: "3周",
      lessons: 15,
      description: "深入学习Go语言的并发模型，包括goroutine、channel、sync包和常见并发模式，掌握高效并发程序开发技巧。",
      image: "/courses/go-concurrency.png",
      tags: ["并发", "goroutine", "channel"]
    },
    {
      title: "Go Web开发进阶",
      href: "/courses/go-web",
      level: "中级",
      duration: "5周",
      lessons: 25,
      description: "学习使用Go语言开发高性能Web应用，包括HTTP服务器、RESTful API、中间件、数据库交互和常用Web框架（如Gin、Echo）等内容。",
      image: "/courses/go-web.png",
      tags: ["Web", "API", "框架"]
    },
    {
      title: "Go微服务架构",
      href: "/courses/go-microservices",
      level: "高级",
      duration: "6周",
      lessons: 30,
      description: "学习使用Go语言构建微服务架构，包括服务发现、负载均衡、API网关、消息队列、分布式追踪等微服务核心组件的实现。",
      image: "/courses/go-microservices.png",
      tags: ["微服务", "分布式", "云原生"]
    },
  ],

  projects: [
    {
      title: "Go中文文档",
      href: "https://golang.cn/docs",
      dates: "2015年至今",
      active: true,
      description:
        "Go语言官方文档的中文翻译项目，提供最新、最全面的Go语言中文文档，帮助中国开发者更好地学习和使用Go语言。",
      technologies: [
        "Go",
        "Markdown",
        "Next.js",
        "HeroUI",
      ],
      links: [
        {
          type: "网站",
          href: "https://golang.cn/docs",
          icon: <GlobeIcon className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/golang-china/docs",
          icon: <GithubIcon className="size-3" />,
        },
      ],
      image: "/projects/go-docs.png",
    },
    {
      title: "Go语言实战",
      href: "https://golang.cn/tutorials",
      dates: "2018年至今",
      active: true,
      description:
        "一系列实用的Go语言教程和实战项目，涵盖Web开发、微服务、系统编程、并发编程等多个领域，帮助开发者快速掌握Go语言的实际应用。",
      technologies: [
        "Go",
        "Docker",
        "Kubernetes",
        "gRPC",
        "PostgreSQL",
      ],
      links: [
        {
          type: "网站",
          href: "https://golang.cn/tutorials",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/projects/go-tutorials.png",
    },
    {
      title: "Go开源项目精选",
      href: "https://golang.cn/projects",
      dates: "2019年至今",
      active: true,
      description:
        "精选优质的Go语言开源项目，提供中文介绍、使用教程和最佳实践，帮助开发者了解和使用优秀的Go语言开源工具和库。",
      technologies: [
        "Go",
        "GitHub API",
        "Next.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "网站",
          href: "https://golang.cn/projects",
          icon: <GlobeIcon className="size-3" />,
        },
      ],
      image: "/projects/go-projects.png",
    },
    {
      title: "Go语言在线运行环境",
      href: "https://golang.cn/playground",
      dates: "2020年至今",
      active: true,
      description:
        "基于浏览器的Go语言在线编译和运行环境，支持代码分享、保存和导出，方便开发者快速测试Go代码片段和学习示例。",
      technologies: [
        "Go",
        "WebAssembly",
        "React",
        "Monaco Editor",
      ],
      links: [
        {
          type: "网站",
          href: "https://golang.cn/playground",
          icon: <GlobeIcon className="size-3" />,
        },
        {
          type: "源码",
          href: "https://github.com/golang-china/playground",
          icon: <GithubIcon className="size-3" />,
        },
      ],
      image: "/projects/go-playground.png",
    },
  ],

  events: [
    {
      title: "Go语言中国开发者大会",
      dates: "2023年10月21日-22日",
      location: "北京",
      description:
        "中国最大的Go语言开发者年度盛会，汇集国内外Go语言专家和企业代表，分享Go语言最新发展和实践经验。",
      image: "/events/gochina-conf.png",
      links: [
        {
          title: "回顾",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "/events/gochina-conf-2023",
        },
      ],
    },
    {
      title: "Go语言实战工作坊",
      dates: "每月举办",
      location: "线上 + 北京/上海/深圳",
      description:
        "定期举办的Go语言实战工作坊，通过实际项目和案例，帮助开发者掌握Go语言的实际应用技能。",
      image: "/events/go-workshop.png",
      links: [
        {
          title: "报名",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "/events/workshop",
        },
      ],
    },
    {
      title: "Go语言读书会",
      dates: "每周四晚上",
      location: "线上",
      description:
        "每周一次的Go语言读书会，共同阅读和讨论Go语言相关的经典书籍和文章，促进深入学习和交流。",
      image: "/events/go-reading.png",
      links: [
        {
          title: "加入",
          icon: <GlobeIcon className="h-4 w-4" />,
          href: "/events/reading-group",
        },
      ],
    },
  ],
} as const;