const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const config = require('../services/config')

const { getUserId } = require('./user')
const {createToken, deleteToken} = require('../services/store/session.service')
const {getToken} = require('./session')


module.exports = {
  
  refresh: async (refreshToken) => {
    const session = await getToken(refreshToken);

    if (session) {
      const user = await getUserId(session.user_id);
      const accessToken = jwt.sign(
        { user_id: user.user_id, Fullname: user.name },
        config.JWT_KEY
      );
      const refreshToken = uuidv4();
      await deleteToken(session.token);
      await createToken({
        user_id: session.user_id,
        token: refreshToken,
      });
      return { accessToken, refreshToken };
    }
    return {};
  },
  authorizeById: async (user_id) => {
    
    const user = await getUserId(user_id);

    if (user) {
      const accessToken = jwt.sign(
        { user_id: user.id, Fullname: user.name },
        config.JWT_KEY
      );
      const refreshToken = uuidv4();
      await createToken({
        user_id: user.id,
        token: refreshToken,
      });
      return { accessToken, refreshToken };
    }
    return {};
  },
  logout: async (token) => {
    await deleteToken(token);
  },
  
};