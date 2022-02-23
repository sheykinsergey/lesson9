const router = require('express').Router();
const passport = require('passport');
const asyncError = require('../middlewares/asyncError');
const UnauthorizedException = require('../errors/UnauthorizedException');
const ForbiddenException =require('../errors/ForbiddenException')
const {refresh, logout, authorizeById } = require('../domian/auth');


router.post('/refresh', asyncError(async (req, res) => {
    const { accessToken, refreshToken } = await refresh(req.body.refreshToken);
    if (accessToken) {
      return res.send({
        accessToken: accessToken,
        refreshToken: refreshToken,
        success: true,
      });
    }
    throw ForbiddenException;
  })
);

router.post('/google', passport.authenticate("google-token", { session: false }), asyncError(async (req, res) => {
    console.log('req.auth')
    console.log(req.headers.authorization);
    const { accessToken, refreshToken } = await authorizeById(req.user.id);
    console.log('isAuthenticated: ', req.isAuthenticated())
    console.log('Cookies: ', req.cookies)
    if (accessToken) {
      res.cookie('session_id', accessToken, {
        maxAge: 360000,
        httpOnly: true
      })
      return res.send({
        accessToken: accessToken,
        refreshToken: refreshToken,
        success: true,
      });
    }
    throw UnauthorizedException;
  })
);
router.post('/facebook', passport.authenticate("facebook-token", { session: false }), asyncError(async (req, res) => {
  const { accessToken, refreshToken } = await authorizeById(req.user.id);
  
  if (accessToken) {
    // res.cookie('session_id', accessToken,{
    //   maxAge: 3600,
    //   httpOnly: true
    // })
    return res.send({
      accessToken: accessToken,
      refreshToken: refreshToken,
      success: true,
    });
  }
  throw UnauthorizedException;
})
);
router.post('/logout', asyncError(async(req, res) => {
  await logout(req.body.refreshToken)
  return res.send({success: true})
}))

module.exports = router;