import { DocumentContentVO } from "@/types/document-content";
import { Response } from "@/types/dto";
import { request } from "@/utils/request";

// 根据id获取文档内容
export const getDocumentContentById: (
  id: string
) => Promise<Response<DocumentContentVO>> = (id: string) => {
  return request.get(`/document-content/${id}`);
};

// 根据文档id获取所有文档内容
export const getAllDocumentContentByDocumentId: (
  id: string
) => Promise<Response<DocumentContentVO[]>> = (id: string) => {
  return request.get(`/document-content/all?document_id=${id}`);
};
