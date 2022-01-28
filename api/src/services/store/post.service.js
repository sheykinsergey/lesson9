const db = require('../db');

module.exports ={
  getAllPosts: async () => db.select().from('posts').orderBy('id', 'desc'),
  getPostId: async (postId) => db.select().from('posts').where({id: postId}),
  getPostIdUserId: async (postId, userId) => db.select().from('posts').where({id: postId, userId: userId}),
  getPostIdComments: async (postId) => db.select().from('comments').where({ id: postId }),
  getPostIdLikes: async (postId) => db.select().from('postsLikes').where({ postId: postId }),
  addPost: async (body) => db.insert({userId: body.userId, date: body.date, text: body.text, likes: body.likes}).into('posts'),
  updatePost: async (postId, body) => db.select().from('posts').where({ id: postId }).update({text: body.text}),
  deletePost: async (postId) => db.select().from('posts').where({ id: postId }).del()
}