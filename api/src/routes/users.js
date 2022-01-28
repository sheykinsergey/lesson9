const router = require('express').Router();
const usersService = require('../services/store/user.service');
const avatar = require('./avatar')

router.get('/', async (req, res) => {
    res.send(await usersService.getAllUsers())
});

router.get('/:id', async (req, res) => {
    res.send(await usersService.getUserId(req.params.id))
});

router.post('/', async (req, res) => {
    await usersService.addUser(req.body)
    res.send('Created new user!')
});

router.put('/:id', async (req, res) => {
    await usersService.updateUser(req.params.id, req.body)
    res.status(200).send('User updated!');
});

router.delete('/:id', async (req, res) => {
    await usersService.deleteUser(req.params.id);
	res.status(200).send('User deleted!');  
});

router.post('/:id', avatar.single('avatar'), function (req, res, next) {
    if(!req.file){
        res.send('error')
    }
    res.redirect(303, `http://localhost:3000/users/${req.params.id}`)
})
module.exports = router;