import { apiClient } from "../../../config/axios"

export const putPost = async (id) => {
  return apiClient.put(`/posts/${id}`)
}