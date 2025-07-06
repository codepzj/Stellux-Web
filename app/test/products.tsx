import sidefolioAceternity from "@/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "@/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "@/images/sidefolio-moonbeam.png";
import sidefolioTailwindMasterKit from "@/images/sidefolio-tailwindmasterkit.png";
import { PostVO } from "@/types/post";

export const products: PostVO[] = [
  {
    id: "1",
    title: "Aceternity",
    description:
      "A design and development studio that focuses on building quality apps.",
    thumbnail: sidefolioAceternity.src,
    tags: ["Nextjs", "Tailwindcss"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author: "Aceternity",
    category: "Design",
    content: "Aceternity",
    is_top: false,
    is_publish: true,
  },
  {
    id: "2",
    title: "Algochurn",
    description:
      "Practice for technical interviews with hands on coding challenges.",
    thumbnail: sidefolioAlgochurn.src,
    tags: ["Nextjs", "Tailwindcss"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author: "Algochurn",
    category: "Design",
    content: "Algochurn",
    is_top: false,
    is_publish: true,
  },
  {
    id: "3",
    title: "Moonbeam",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: sidefolioMoonbeam.src,
    tags: ["Nextjs", "Tailwindcss"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author: "Moonbeam",
    category: "Design",
    content: "Moonbeam",
    is_top: false,
    is_publish: true,
  },
  {
    id: "4",
    title: "Algochurn",
    description:
      "Practice for technical interviews with hands on coding challenges.",
    thumbnail: sidefolioAlgochurn.src,
    tags: ["Nextjs", "Tailwindcss"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author: "Algochurn",
    category: "Design",
    content: "Algochurn",
    is_top: false,
    is_publish: true,
  },
  {
    id: "5",
    title: "Moonbeam",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: sidefolioMoonbeam.src,
    tags: ["Nextjs", "Tailwindcss"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author: "Moonbeam",
    category: "Design",
    content: "Moonbeam",
    is_top: false,
    is_publish: true,
  },
  {
    id: "6",
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit.src,
    tags: ["Nextjs", "Tailwindcss"],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author: "Tailwind Master Kit",
    category: "Design",
    content: "Tailwind Master Kit",
    is_top: false,
    is_publish: true,
  },
];
