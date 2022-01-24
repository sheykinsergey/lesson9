const router = require('express').Router();
const commentService = require('../services/store/comment.service');

router.get('/', async (req, res) => {
	res.send(await commentService.getAllComments());
});

router.get('/:commentId', async (req, res) => {
	res.send(await commentService.getCommentsId(req.params.commentId))
});

router.post('/', async (req, res) => {

	await commentService.addComment(req.body);

	res.status(201).send('Created new comment!');
});

router.put('/:commentId', async (req, res) => {
	await commentService.updateComment(req.params.commentId, req.body);
	res.status(200).send('Comment updated!');
});

router.delete('/:commentId', async (req, res) => {

	await commentService.deleteComment(req.params.commentId);
    
	res.status(200).send('Comment deleted!');
});

module.exports = router;