import { request } from "@/utils/request";
import { CommentRequest } from "@/types/comment";

export const getCommentListByPostIdAPI = (postId: string) => {
  return request.get(`/comment/list/${postId}`);
};

export const createCommentAPI = (comment: CommentRequest) => {
  return request.post("/comment/create", comment);
};