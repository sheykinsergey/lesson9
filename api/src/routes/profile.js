const router = require('express').Router();
const avatar = require('./avatar')

router.post('/:id', avatar.single('avatar'), function (req, res, next) {
  if(!req.file){
      res.send('error')
  }
  res.redirect(303, `http://localhost:3000/profile/${req.params.id}`)
})
module.exports = router;