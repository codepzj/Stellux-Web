export interface CommentRequest {
  nickname: string
  email: string
  url?: string
  avatar: string
  content: string
  post_id: string
  comment_id: string
}

export interface CommentVO {
  id: string
  created_at: string
  updated_at: string
  nickname: string
  email: string
  url: string
  avatar: string
  content: string
  post_id: string
  comment_id: string
}
