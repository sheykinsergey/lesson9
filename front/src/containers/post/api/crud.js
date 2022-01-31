import { apiClient } from "../../../config/axios";

export const getPosts = async () => {
  return apiClient.get('/posts')
}
export const getPost = async (id) => {
  return apiClient.get(`/posts/${id}`)
}

