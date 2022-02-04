const router = require('express').Router();
const postService = require('../services/store/post.service');
const asyncError = require('../middlewares/asyncError');

router.get('/', asyncError(async (req, res) => {
	res.send(await postService.getAllPosts());
}));

router.get('/:postId', asyncError(async (req, res) => {
	res.send(await postService.getPostId(req.params.postId, req.params.userId));
}));
router.get('/:postId', asyncError(async (req, res) => {
	res.send(await postService.getPostIdUserId(req.params.postId));
}));

router.get('/:postId/comments', asyncError(async (req, res) => {
	res.send(await postService.getPostIdComments(req.params.postId));
}));

router.get('/:postId/likes', asyncError(async (req, res) => {
	res.send(await postService.getPostIdLikes(req.params.postId));
}));

// router.post('/', asyncError(async (req, res) => {
// 	await postService.addPost(req.body);
// 	res.status(201).send('Created new article!');
// }));
router.post('/add', asyncError(async (req, res) => {
	console.log(req.body);
	await postService.addPost(req.body);
	res.status(201).send('Created new article!');
}));

router.put('/:postId', asyncError(async (req, res) => {
	await postService.updatePost(req.params.postId, req.body);
	res.status(200).send('Post updated!');
}));

router.delete('/:postId', asyncError(async (req, res) => {
	await postService.deletePost(req.params.postId)
	res.status(200).send('Post deleted!');
}));

module.exports = router;