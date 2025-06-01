import  request  from "@/utils/request";
import { AboutConfigVO, BasicConfigVO, BlogConfigVO, SeoConfigVO } from "@/types/config";

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