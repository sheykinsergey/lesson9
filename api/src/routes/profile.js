const router = require('express').Router();
const avatar = require('./avatar')

router.post('/:id', avatar.single('avatar'),  (req, res, next) => {
  console.log(req.file);
  if(!req.file){
      res.send('error')
  }
  // res.redirect(303, `http://localhost:3000/profile/${req.params.id}`)
})
module.exports = router;    