import { apiClient } from "../../../config/axios";

export const getUserId = async (id) => {
  return apiClient.get(`/users/${id}`)
}