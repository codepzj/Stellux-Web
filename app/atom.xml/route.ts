import { NextResponse } from 'next/server'
import RSS from 'rss'
import { getAllPublishPostAPI } from '@/api/post'

export async function GET() {
  const postList = await getAllPublishPostAPI().then((res) => res.data)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string

  const feed = new RSS({
    title: 'Go语言中文网 - 最全面的Go语言中文学习平台',
    description:
      '最全面的Go语言中文学习平台,提供高质量的中文教程和社区支持,助力开发者快速掌握Go语言。',
    site_url: siteUrl,
    feed_url: `${siteUrl}/atom.xml`,
    language: 'zh-CN',
    pubDate: new Date(),
    copyright: 'Go语言中文网',
    categories: ['Go语言', 'Go语言中文网', 'Go语言教程', 'Go语言社区'],
    ttl: 60,
  })

  postList.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.alias}`,
      date: post.created_at,
    })
  })

  const xml = feed.xml({ indent: true })

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
