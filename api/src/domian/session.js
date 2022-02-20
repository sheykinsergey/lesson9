const {getToken} = require('../services/store/session.service')

module.exports = {
  getToken: async (token) => {
    const session = await getToken(token);
    return session;
  }
  
}