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
  return request.get<FriendShowVO[]>('/friend/list')
}

export const getAllFriendsAPI = () => {
  return request.get<FriendVO[]>('/admin-api/friend/all')
}

export const createFriendAPI = (data: CreateFriendDTO) => {
  return request.post<CreateFriendDTO, Response>('/admin-api/friend/create', data)
}

export const updateFriendAPI = (data: UpdateFriendDTO) => {
  return request.put<UpdateFriendDTO, any>('/admin-api/friend/update', data)
}

export const deleteFriendAPI = (id: string) => {
  return request.delete<any, any>(`/admin-api/friend/delete/${id}`, {} as any)
}
