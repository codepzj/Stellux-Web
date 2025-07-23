export interface CommentRequest {
  nickname: string;
  email: string;
  url?: string;
  avatar: string;
  content: string;
  post_id: string;
  comment_id: string;
}