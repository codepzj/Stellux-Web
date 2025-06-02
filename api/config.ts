import  request  from "@/utils/request";
import { AboutConfigVO, BasicConfigVO, BlogConfigVO, CommentSettingVO, SeoConfigVO } from "@/types/config";

export const getBasicConfigAPI = () => {
  return request.get<BasicConfigVO>("/setting/basic");
};

export const getSeoConfigAPI = () => {
  return request.get<SeoConfigVO>("/setting/seo");
};

export const getBlogConfigAPI = () => {
  return request.get<BlogConfigVO>("/setting/blog");
};

export const getAboutConfigAPI = () => {
  return request.get<AboutConfigVO>("/setting/about");
};

export const getCommentSettingAPI = () => {
  return request.get<CommentSettingVO>("/setting/comment");
};