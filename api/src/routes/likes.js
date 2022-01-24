const router = require('express').Router();
const postLikeService = require('../services/store/post.like.service');

router.post('/', async (req, res) => {
	await postLikeService.addLike(req.body);
	res.status(201).send('Like this post!');
});

router.delete('/:likeId', async (req, res) => {
	await postLikeService.deleteLike(req.params.likeId);
	res.status(200).send('Like is deleted!');
});

module.exports = router;