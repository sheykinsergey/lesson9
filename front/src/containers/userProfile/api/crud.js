import { apiClient } from "../../../config/axios";

export const getUser = async (id) => {
  return apiClient.get(`/users/${id}`)
}
export const setEditUser = async (id, data) => {
  return apiClient.put(`/users/${id}`, data)
}