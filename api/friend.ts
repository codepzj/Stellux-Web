import { request } from '@/utils/request'

export type FriendShowVO = {
  name: string
  description: string
  site_url: string
  avatar_url: string
  website_type: number
}

export type FriendVO = FriendShowVO & {
  id: string
  is_active: boolean
}

export type CreateFriendDTO = {
  name: string
  description: string
  site_url: string
  avatar_url: string
  website_type: number
}

export type UpdateFriendDTO = CreateFriendDTO & {
  id: string
  is_active: boolean
}

export const getFriendListAPI = () => {
  return request<FriendShowVO[]>('/friend/list')
}

export const getAllFriendsAPI = () => {
  return request<FriendVO[]>('/admin-api/friend/all')
}

export const createFriendAPI = (data: CreateFriendDTO) => {
  return request<null>('/admin-api/friend/create', 'POST', { body: data })
}

export const updateFriendAPI = (data: UpdateFriendDTO) => {
  return request<null>('/admin-api/friend/update', 'PUT', { body: data })
}

export const deleteFriendAPI = (id: string) => {
  return request<null>(`/admin-api/friend/delete/${id}`, 'DELETE')
}
