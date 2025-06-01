import { getPostDetailAPI } from "@/api/post";
import { Markdown } from "@/components/Md";
import { getTableOfContents } from "@/lib/toc";
import { Spacer } from "@heroui/spacer";
import { Metadata } from "next";
import PostHeader from "./header";
import { ScrollToc } from "@/components/Toc";

type Props = {
  params: Promise<{ id: string }>
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await getPostDetailAPI(id);
  const toc = await getTableOfContents(post.data.content)

  return (
    <div className="relative w-full mx-auto text-default-600">
      <div className="w-full flex flex-col md:flex-row justify-center gap-2">
        <div className="flex-1 w-full md:max-w-xl lg:max-w-3xl md:mr-4 mb-20 px-4 mx-auto md:mx-0">
          <PostHeader
            title={post.data.title || ""}
            created_at={post.data.created_at || ""}
            updated_at={post.data.updated_at || post.data.created_at || ""}
          />
          <Spacer y={8} />
          <Markdown className="pl-2 break-words overflow-x-auto" content={post.data.content} />
        </div>
        <div className="hidden lg:block sticky top-4 h-[calc(100vh-1rem)] w-48 shrink-0">
          <ScrollToc toc={toc} />
        </div>
      </div>
    </div>
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
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/post/${id}`;

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
