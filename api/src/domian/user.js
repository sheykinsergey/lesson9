
const {getUserEmail, getUserId, createUser} = require('../services/store/user.service')

module.exports = {

  getUserEmail: async (email) => {
    return getUserEmail(email)
  },

  getUserId: async (id) => {
    const user = await getUserId(id)
    return user
  },

  createUser: async (user) => {
    const [newUserId] = await createUser(user);
    // send an email for example
    return newUserId;
  }
}