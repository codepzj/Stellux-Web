import { request } from '@/utils/request'
import { DocumentVO } from '@/types/document'
import { Response } from '@/types/dto'

// 获取全部公开文档
export const getAllPublicDocument: () => Promise<Response<DocumentVO[]>> = () => {
  return request.get('/document/all')
}

// 根据id获取根文档
export const getDocumentById: (id: string) => Promise<Response<DocumentVO>> = (id: string) => {
  return request.get(`/document/${id}`)
}

// 根据alias获取文档
export const getDocumentByAlias: (alias: string) => Promise<Response<DocumentVO>> = (
  alias: string
) => {
  return request.get(`/document/alias/${alias}`)
}
