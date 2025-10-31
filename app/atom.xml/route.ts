import { NextRequest } from 'next/server'
import { getAllPublishPostAPI } from '@/api/post'

export async function GET(request: NextRequest) {
  try {
    const posts = await getAllPublishPostAPI()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin

    const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Gopher</title>
  <link href="${siteUrl}" />
  <link href="${siteUrl}/atom.xml" rel="self" type="application/atom+xml" />
  <id>${siteUrl}/</id>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>Gopher</name>
  </author>
  <subtitle>Gopher的个人技术博客,记录Golang学习与开发实践。</subtitle>
  ${posts.data
    .map(
      (post) => `
  <entry>
    <title>${post.title}</title>
    <link href="${siteUrl}/blog/${post.alias}" />
    <id>${siteUrl}/blog/${post.alias}</id>
    <updated>${new Date(post.created_at).toISOString()}</updated>
    <summary>${post.description || post.content || post.title}</summary>
    ${post.tags && post.tags.length > 0 ? post.tags.map((tag) => `<category term="${tag}" />`).join('') : ''}
  </entry>
  `
    )
    .join('')}
</feed>`

    return new Response(atom, {
      headers: {
        'Content-Type': 'application/atom+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Atom generation error:', error)
    return new Response('Error generating Atom feed', { status: 500 })
  }
}

export const revalidate = 3600 // 1 hour