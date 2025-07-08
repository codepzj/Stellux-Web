

import { getPostDetailAPI } from "@/api/post";
import { Markdown } from "@/components/basic/md";
import { Metadata } from "next";
import BlogComment from "./comment";
import { getSiteConfigAPI } from "@/api/setting";
import { Spacer } from "@/components/Spacer";
import { Header } from "@/layout/header";
import { TopNav } from "@/layout/top-nav";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switcher";
import { topNav } from "@/constrant/topnav-data";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostDetailAPI(id);

  return (
    <>
      <div className="relative md:w-4/5 mx-auto text-default-600">
        <h1 className="text-3xl text-default-900 font-medium text-center">
          {post.data.title}
        </h1>
        <Spacer y={16} />
        <Markdown
          className="break-words overflow-x-auto"
          content={post.data.content}
        />
        <Spacer y={16} />
        <BlogComment />
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostDetailAPI(id);
  const data = post.data;

  const title = data.title;
  const description = data.description;
  const image = data.thumbnail;
  const keywords = [data.category, ...(data.tags || [])].filter(Boolean);
  const seoConfig = await getSiteConfigAPI();
  const baseUrl = seoConfig.data.siteUrl;
  const url = `${baseUrl}/post/${id}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    authors: [{ name: data.author }],
    metadataBase: new URL(url),
  };
}
