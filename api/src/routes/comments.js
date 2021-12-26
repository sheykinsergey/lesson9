const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
    // select all comment from a specific post
    const postid = req.query.postid;

    const comment = await db.select().from('comments').where({postid: postid});

    res.send(comment);
});

router.get('/:id', async (req, res) => {
    // select a specific comment
    const commentid = req.params.id;

    const comment = await db.select().from('comments').where({id: commentid});

    res.send(comment);
});

router.post('/', async (req, res) => {
  // add a comment to the post
    const text = req.body.text;
    const postid = req.body.postid;
    const userid = req.body.userid;

    await db('comments').insert({text: text, postid: postid, userid: userid});

    res.send('add comment');
});

router.put('/:id', async (req, res) => {

    const commentid = req.params.id;
    const text = req.query.text;

    await db('comments').where({id: commentid}).update({text: text});

    res.send('comment update');
});

router.delete('/:id', async (req, res) => {

    const commentid = req.params.id;

    await db('comments').where({id: commentid}).del();

    res.send('сomment has been deleted')
});

module.exports = router;