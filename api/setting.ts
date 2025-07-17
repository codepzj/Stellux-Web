import { request } from "@/utils/request";

export interface SiteConfigVO {
  siteTitle: string; // 网站名称
  siteSubtitle: string; // 网站描述
  siteUrl: string; // 网站url
  siteKeywords: string; // 网站关键词
  siteFavicon: string; // 网站favicon
  siteAvatar: string; // 网站头像
  siteAuthor: string; // 网站作者
  siteAnimateText: string; // 网站打字机文本
  siteCopyright: string; // 网站版权
  siteIcp: string; // 网站备案号
  siteIcpLink: string; // 网站备案号链接
  githubUsername: string; // github用户名
}

export interface SiteConfigDTO {
  siteTitle: string; // 网站名称
  siteSubtitle: string; // 网站描述
  siteUrl: string; // 网站url
  siteKeywords: string; // 网站关键词
  siteFavicon: string; // 网站favicon
  siteAvatar: string; // 网站头像
  siteAuthor: string; // 网站作者
  siteAnimateText: string; // 网站打字机文本
  siteCopyright: string; // 网站版权
  siteIcp: string; // 网站备案号
  siteIcpLink: string; // 网站备案号链接
  githubUsername: string; // github用户名
}

export const getSiteConfigAPI = () => {
  return request.get<SiteConfigVO>("/setting/site_config");
};
