const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {

    const limit = req.query.limit;
    const list = await db.select().from('users').orderBy('id').limit(limit);

    res.send(list);
});

router.get('/:id', async (req, res) => {

    const userId = req.params.id;
    const user = await db.select().from('users').where({'id': userId});
    
    res.send(user);
});

router.post('/', async (req, res) => {

    const addUser = req.body.name;
    await db('users').insert({name: addUser})

    res.send(`add name ${addUser}`);
});

router.put('/:id', async (req, res) => {

    const editUserId = req.params.id;
    const editName = req.query.name;

    await db('users').where({id: editUserId}).update({name: editName})

    res.send(`Update id ${editUserId} to ${editName} Ok`);
});

router.delete('/:id', async (req, res) => {

    const delUser = req.params.id;
    await db('users').where({id: delUser}).del();

    res.send('Delete Ok');
});

module.exports = router;