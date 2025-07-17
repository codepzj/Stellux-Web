import { getPostByIdAPI } from "@/api/post";
import { Markdown } from "@/components/business/md";
import { Metadata } from "next";
import BlogComment from "./comment";
import { getSiteConfigAPI } from "@/api/setting";
import { Spacer } from "@/components/basic/Spacer";
import { Toc } from "@/components/business/toc";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostByIdAPI(id);

  return (
    <>
      <div className="relative text-default-600 flex flex-col gap-4 lg:flex-row p-2 lg:p-4">
        <div className="w-full lg:w-4/5">
          <h1 className="text-3xl text-default-900 font-medium text-center">
            {post.data.title}
          </h1>
          <Spacer y={16} />
          <Markdown
            className="break-words overflow-x-auto"
            content={post.data.content}
          />
          <BlogComment />
        </div>
        <div className="hidden relative lg:block lg:w-1/5">
          <Toc className="sticky top-20" content={post.data.content} />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostByIdAPI(id);
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
