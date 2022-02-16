const db = require('../db');

module.exports ={
  getAllPosts: async () => db.select().from('posts').orderBy('id', 'desc'),
  getPostId: async (postId) => db.select().from('posts').where({id: postId}),
  // getPostIdUserId: async (postId, userId) => db.select().from('posts').where({id: postId, userId: userId}),
  getPostIdComments: async (postId) => db.select().from('comments').where({ id: postId }),
  getPostIdLikes: async (postId) => db.select().from('postsLikes').where({ postId: postId }),
  addPost: async (body, file) => db.insert({userId: body.userId, date: body.date, text: body.text, vis: body.visibility, file: file.filename}).into('posts'),
  updatePost: async (id, body) => db.select().from('posts').where({ id: id }).update({text: body.text, date: body.date, vis: body.visibility, file: body.file}),
  deletePost: async (postId) => db.select().from('posts').where({ id: postId }).del()
}