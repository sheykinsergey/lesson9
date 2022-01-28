const router = require('express').Router();
const postService = require('../services/store/post.service');

router.get('/', async (req, res) => {
	res.send(await postService.getAllPosts());
});

router.get('/:postId', async (req, res) => {
	res.send(await postService.getPostId(req.params.postId, req.params.userId));
});
router.get('/:postId', async (req, res) => {
	res.send(await postService.getPostIdUserId(req.params.postId));
});

router.get('/:postId/comments', async (req, res) => {
	res.send(await postService.getPostIdComments(req.params.postId));
});

router.get('/:postId/likes', async (req, res) => {
	res.send(await postService.getPostIdLikes(req.params.postId));
});

router.post('/', async (req, res) => {
	await postService.addPost(req.body);
	res.status(201).send('Created new article!');
});

router.put('/:postId', async (req, res) => {
	await postService.updatePost(req.params.postId, req.body);
	res.status(200).send('Post updated!');
});

router.delete('/:postId', async (req, res) => {
	await postService.deletePost(req.params.postId)
	res.status(200).send('Post deleted!');
});

module.exports = router;