const express = require('express');
const router = express.Router();
const CommentService = require('./CommentService');
const idNumberControl = require('../shared/idNumberControl');
const { body, validationResult } = require('express-validator');
const ValidationException = require('../shared/ValidationException');

router.get('/comments', async (req, res) => {
    const comments = await CommentService.getComments();

    res.status(200).send(comments);
});

router.get('/comments/:id', idNumberControl, async (req, res) => {
    const comment = await CommentService.getComment(req.params.id);

    if (comment) {
        res.status(200).send(comment);
    } else {
        res.status(404).send();
    }
});

router.post('/comments', async (req, res, next) => {
    const newComment = await CommentService.createComment(req.body);

    res.status(200).send(newComment);
});

router.put('/comments/:id', idNumberControl, async (req, res, next) => {
    const updatedComment = await CommentService.updateComment(req.params.id, req.body);

    res.status(200).send(updatedComment)
});

router.delete('/comments/:id', idNumberControl, async (req, res) => {
    await CommentService.deleteComment(req.params.id);

    res.status(204).send();
});

module.exports = router;