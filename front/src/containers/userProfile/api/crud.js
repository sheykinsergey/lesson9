import { apiClient } from "../../../config/axios";

export const getUser = async (id) => {
  return apiClient.get(`/users/${id}`)
}
export const setEditUser = async (id, data) => {
  return apiClient.put(`/users/${id}`, data)
}
export const setAvatar = async (id, avatar) => {
  return apiClient.post(`/profile/${id}`, avatar, {
    headers:{'Content-Type': 'multipart/form-data'}
  })
}