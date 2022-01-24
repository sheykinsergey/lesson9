const db = require('../db');

module.exports = {
  getAllUsers: async () => db.select().from('users').orderBy('id'),
  getUserId: async (id) => db.select().from('users').where('id', id),
  addUser: async (body) => db.insert({name:body.name, email:body.email, phone:body.phone, university:body.university}).into('users'),
  updateUser: async (id, body) => db
      .select()
      .from('users')
      .where({ id: id })
      .update({name:body.name, email:body.email, phone:body.phone, university:body.university}),
  deleteUser: async (id) => db.select().from('users').where({ id: id }).del()
}