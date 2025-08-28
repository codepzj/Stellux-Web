import { NextRequest } from 'next/server'
import { getAllPublishPostAPI } from '@/api/post'

export async function GET(request: NextRequest) {
  try {
    const posts = await getAllPublishPostAPI()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Gopher</title>
    <link>${siteUrl}</link>
    <description>Gopher的个人技术博客,记录Golang学习与开发实践。</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts.data
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.alias}</link>
      <guid>${siteUrl}/blog/${post.alias}</guid>
      <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
      <description><![CDATA[${post.description || post.content || post.title}]]></description>
      ${post.tags && post.tags.length > 0 ? `<category>${post.tags.join(', ')}</category>` : ''}
    </item>
    `
      )
      .join('')}
  </channel>
</rss>`

    return new Response(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('RSS generation error:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
