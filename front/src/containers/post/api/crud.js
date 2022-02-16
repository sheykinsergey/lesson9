import { apiClient } from "../../../config/axios";

export const getPosts = async () => {
  return apiClient.get('/posts')
}
export const getPost = async (id) => {
  return apiClient.get(`/posts/${id}`)
}
export const setEditPost = async (id, post) => {
  return apiClient.put(`/posts/${id}`, (post))
}
export const setUpdateImgPost = async (userId, imgPost) => {
  return apiClient.post(`/posts/${userId}`, imgPost, {
    headers:{'Content-Type': 'multipart/form-data'}
  })
}
export const setPost = async (post) => {
  console.log(post);
  return apiClient.post('/posts/add', (post))
}
export const setImgPost = async (imgPost) => {
  return apiClient.post('/posts/add', (imgPost), {
    headers:{'Content-Type': 'multipart/form-data'}
  })
}