import { PageConfigVO } from '@/types/page'
import { request } from '@/utils/request'

// 获取激活的页面配置
export const getActivePageConfigAPI = (pageType: 'home' | 'about' | 'seo') => {
  return request<PageConfigVO>(`/config/${pageType}`, 'GET', { revalidate: 60 })
}
