const jwt = require('jsonwebtoken');
const config = require('../services/config')
const UnauthorizedException = require('../errors/UnauthorizedException');

module.exports = async (req, res, next) => {
  
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    let decoded;
    try {
      decoded = await new Promise((resolve, reject) => {
        jwt.verify(token, config.JWT_KEY, (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        });
      });
    } catch (e) {
      // do nothing
    }
    if (decoded) {
      req.auth = decoded;
      return next();
    }
  }

  next(new UnauthorizedException());
};
