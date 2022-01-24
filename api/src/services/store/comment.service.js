const db = require('../db');

module.exports = {
  getAllComments: async () => db.select().from('comments'),
  getCommentsId: async (commentId) => db.select().from('comments').where({ id: commentId }),
  addComment: async (body) => db.insert({userId: body.userId, postId: body.postId, text: body.text}).into('comments'),
  updateComment: async (commentId, body) => db.select().from('comments').where({ id: commentId }).update({text:body.text}),
  deleteComment: async (commentId) => db.select().from('comments').where({ id: commentId }).del()
}