import RSS from "rss";
import { getAllPublishPostAPI } from "@/api/post";
import { getBasicConfigAPI, getSeoConfigAPI } from "@/api/setting";

export async function GET() {
  const seoConfig = await getSeoConfigAPI();
  const { site_url, site_description } = seoConfig.data;
  const basicConfig = await getBasicConfigAPI();
  const { site_title } = basicConfig.data;
  const feed = new RSS({
    title: site_title,
    description: site_description,
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    language: "zh-CN",
  });

  const res = await getAllPublishPostAPI();

  res.data.forEach((post) => {
    feed.item({
      title: post.title,
      guid: post.id,
      url: `${site_url}/post/${post.id}`,
      description: post.description,
      date: new Date(post.created_at),
      enclosure: {
        url: post.thumbnail,
      },
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}
