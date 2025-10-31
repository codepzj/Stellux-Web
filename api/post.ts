import { PageVO, Page, PageWithTagName, PageWithCategoryName } from '@/types/page'
import { PostVO } from '@/types/post'
import { request } from '@/utils/request'

// 获取文章列表
export const getPostListAPI = (page: PageWithTagName | PageWithCategoryName) => {
  return request.get<PageVO<PostVO>>('/post/list', { params: page })
}

// 根据id获取文章详情
export const getPostDetailByIdAPI = (id: string) => {
  return request.get<PostVO>(`/post/detail/${id}`)
}

// 根据别名获取文章详情
export const getPostByAliasAPI = (alias: string) => {
  return request.get<PostVO>(`/post/alias/${alias}`)
}

// 获取所有发布文章
export const getAllPublishPostAPI = () => {
  return request.get<PostVO[]>(`/post/all`, { params: undefined }, true, 3600)
}

// 搜索框获取文章列表
export const getPostByKeyWordAPI = (keyword: string) => {
  return request.get<PostVO[]>(`/post/search?keyword=${keyword}`)
}
