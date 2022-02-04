import { apiClient } from "../../../config/axios";

export const getPosts = async () => {
  return apiClient.get('/posts')
}
export const getPost = async (id) => {
  return apiClient.get(`/posts/${id}`)
}
export const setEditPost = async (id, post) => {
  return apiClient.put(`/posts/${id}`, post)
}
export const setPost = async (post) => {
  apiClient.post('/posts/add', post);
}
