import request from "@/utils/request";
import { DocumentRootVO, DocumentTreeVO, DocumentVO } from "@/types/document";
import { Response } from "@/types/dto";

export const getAllPublicDocument: () => Promise<
  Response<DocumentRootVO[]>
> = () => {
  return request.get("/document/public");
};

export const getDocumentTreeByID: (
  id: string
) => Promise<Response<DocumentTreeVO[]>> = (id: string) => {
  return request.get(`/document/tree?document_id=${id}`);
};

// 根据id获取文档
export const getDocumentByID: (id: string) => Promise<Response<DocumentVO>> = (id: string) => {
  return request.get(`/document/${id}`);
};

export const getRootDocumentByID: (id: string) => Promise<Response<DocumentRootVO>> = (id: string) => {
  return request.get(`/document/root/${id}`);
};