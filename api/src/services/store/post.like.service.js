const db = require('../db');

module.exports = {
  addLike: async (body) => db.insert({userId: body.userId, postId: body.postId}).into('postsLikes'),
  deleteLike: async (likeId) => db.select().from('postsLikes').where({ id: likeId }).del()
}