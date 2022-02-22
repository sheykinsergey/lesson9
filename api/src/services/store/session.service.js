const db = require('../db');

module.exports = {
  createToken: async (user) => db('session').returning('user_id').insert(user),
  getToken: async(token) => db.select().first().where({token: token}).from('session'),
  deleteToken: async (token) => db('session').where({token: token}).del()
}

