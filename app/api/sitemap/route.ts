import { NextResponse } from 'next/server'
import { getAllPublishPostAPI } from '@/api/post'

type SitemapUrl = {
  loc: string
  priority: number
  changefreq: string
  lastmod?: string
}

export async function GET(request: Request) {
  const postList = await getAllPublishPostAPI().then((res) => res.data)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string

  const staticUrls: SitemapUrl[] = [
    {
      loc: siteUrl,
      priority: 1.0,
      changefreq: 'daily',
    },
    {
      loc: `${siteUrl}/blog`,
      priority: 0.8,
      changefreq: 'daily',
    },
    {
      loc: `${siteUrl}/document`,
      priority: 0.8,
      changefreq: 'daily',
    },
  ]

  const postUrls: SitemapUrl[] = postList.map((post: any) => ({
    loc: `${siteUrl}/blog/${post.alias}`,
    lastmod: new Date(post.updated_at || post.created_at).toISOString(),
    changefreq: 'weekly',
    priority: 0.6,
  }))

  const urls: SitemapUrl[] = [...staticUrls, ...postUrls]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`
  )
  .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
