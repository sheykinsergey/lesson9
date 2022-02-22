const db = require('../db');

module.exports = {
  getAllUsers: async () => db.select().from('users').orderBy('id'),
  getId: async (id) => db.select().from('users').where({id: id}),
  addUser: async (body) => db.insert({name:body.name, email:body.email, phone:body.phone, university:body.university}).into('users'),
  updateUser: async (id, body) => db
      .select()
      .from('users')
      .where({ id: id })
      .update({name:body.name, email:body.email, phone:body.phone, university:body.university}),
  deleteUser: async (id) => db.select().from('users').where({ id: id }).del(),
  getUserEmail: (email) => db.select().first().where({email: email}).from('users'),
  getUserId: async (id) => db.select().first().where({id: id}).from('users'),
  createUser: async (user) => db('users').insert(user),
}