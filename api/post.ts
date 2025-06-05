import { PageVO, Page } from "@/types/page";
import { PostVO, PostSearchVO } from "@/types/post";
import { SiteMapVO } from "@/types/sitemap";
import request from "@/utils/request";

// 获取首页文章列表
export const getPostDetailListAPI = (page: Page) => {
  return request.get<PageVO<PostVO>>("/post/detail/list", { params: page });
};

// 获取文章详情
export const getPostDetailAPI = (id: string) => {
  return request.get<PostVO>(`/post/detail/${id}`);
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
