import { PageVO, Page } from "@/types/page";
import { PostVO, PostSearchVO } from "@/types/post";
import { SiteMapVO } from "@/types/sitemap";
import { request } from "@/utils/request";

// 获取首页文章列表
export const getPostListAPI = (page: Page) => {
  return request.get<PageVO<PostVO>>("/post/list", { params: page });
};

// 获取文章详情
export const getPostByIdAPI = (id: string) => {
  return request.get<PostVO>(`/post/${id}`);
};

// 获取所有发布文章
export const getAllPublishPostAPI = () => {
  return request.get<PostVO[]>(`/post/all`);
};

// 搜索框获取文章列表
export const getPostByKeyWordAPI = (keyword: string) => {
  return request.get<PostSearchVO[]>(`/post/search?keyword=${keyword}`);
};

// 获取站点地图
export const getPostSiteMapAPI = () => {
  return request.get<SiteMapVO[]>(`/post/sitemap`);
};
