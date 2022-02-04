const router = require('express').Router();
const usersService = require('../services/store/user.service');
const asyncError = require('../middlewares/asyncError');
// const asyncHandler = require('express-async-handler')


router.get('/', asyncError(async (req, res) => {
    res.send(await usersService.getAllUsers())
}));

router.get('/:id', asyncError(async (req, res) => {
    res.send(await usersService.getUserId(req.params.id))
}));

router.post('/add', asyncError(async (req, res) => {
    await usersService.addUser(req.body)
    res.send('Created new user!')
}));

router.put('/:id', asyncError(async (req, res) => {
    await usersService.updateUser(req.params.id, req.body)
    res.status(200).send('User updated!');
}));

router.delete('/:id', asyncError(async (req, res) => {
    await usersService.deleteUser(req.params.id);
	res.status(200).send('User deleted!');  
}));

module.exports = router;