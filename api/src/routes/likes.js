const router = require('express').Router();
const db = require('../services/db');


router.get('/', async (req, res) => {

    const postid = req.query.postid;
    
    const likes = await db('likes').count('userid').where({postid});

    res.send(`likes:  ${likes[0].count}`);
});

router.post('/', async (req, res) => {

    const postid = req.body.postid;
    const userid = req.body.userid;

    await db('likes').insert({postid, userid});

    res.send('add like');
});

router.delete('/:id', async (req, res) => {

    const likeid = req.params.id;

    await db('likes').where({id: likeid}).del();

    res.send('like deleted');
});

module.exports = router;