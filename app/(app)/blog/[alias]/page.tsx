import { getPostByAliasAPI } from '@/api/post'
import { Markdown } from '@/components/business/md'
import { Metadata } from 'next'
import { Spacer } from '@heroui/spacer'
import BackToTopButton from './back'

type Props = {
  params: Promise<{ alias: string }>
}

export default async function BlogContent({ params }: Props) {
  const { alias } = await params
  const post = await getPostByAliasAPI(alias).then((res) => {
    return res.data
  })

  return (
    <div className="relative text-default-600 flex flex-col gap-4 lg:flex-row p-2 lg:p-4">
      <div className={`w-full p-4`}>
        <h1 className="text-3xl text-default-900 font-medium text-center mt-4 mb-4">
          {post.title}
        </h1>
        <Spacer y={16} />
        <Markdown className="break-words overflow-x-auto" content={post.content} />
      </div>
      <BackToTopButton />
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { alias } = await params
  const post = await getPostByAliasAPI(alias).then((res) => {
    return res.data
  })

  const title = post.title
  const description = post.description
  const image = post.thumbnail
  const keywords = [post.category, ...(post.tags || [])].filter(Boolean)
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${alias}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    authors: [{ name: post.author }],
    metadataBase: new URL(url),
  }
}
