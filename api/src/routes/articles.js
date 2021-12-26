const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {

    const limit = req.query.limit;

    const list = await db.select().from('articles').orderBy('id').limit(limit);

    res.send(list);
});

router.get('/:id', async (req, res) => {

    const articleId = req.params.id;

    const post = await db.select().from('articles').where('id', articleId);

    res.send(post);
});

router.post('/', async (req, res) => {

    const textPost = req.body.text;
    const userid = req.body.userid;

    await db('articles').insert({text: textPost, userid: userid});

    res.send(`add post: ${textPost}`);
});

router.put('/:id', async (req, res) => {

    const editPostId = req.params.id;
    const editText = req.query.text;

    await db('articles').where({id: editPostId}).update({text: editText})

    res.send(`Update id:${editPostId} to ${editText} -> Ok`);
});

router.delete('/:id', async (req, res) => {

    const delPost = req.params.id;
    
    await db('articles').where({id: delPost}).del();

    res.send('Delete Ok');
});

module.exports = router;