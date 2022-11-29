const express = require('express');
const router = express.Router();
const PostService = require('./PostService');
const idNumberControl = require('../shared/idNumberControl');
const { body, validationResult } = require('express-validator');
const ValidationException = require('../shared/ValidationException');

router.get('/posts', async (req, res) => {
    const posts = await PostService.getPosts();

    res.status(200).send(posts);
});

router.get('/posts/:id', idNumberControl, async (req, res) => {
    const post = await PostService.getPost(req.params.id);

    if (post) {
        res.status(200).send(post);
    } else {
        res.status(404).send();
    }
});

router.post('/posts', async (req, res, next) => {
    const newPost = await PostService.createPost(req.body);

    res.status(200).send(newPost);
});

router.put('/posts/:id', idNumberControl, async (req, res, next) => {
    // Validar campos do parciais update se preenchidos
    // tratar duplicidade do name
    const updatedPost = await PostService.updatePost(req.params.id, req.body);

    res.status(200).send(updatedPost)
});

router.delete('/posts/:id', idNumberControl, async (req, res) => {
    await PostService.deletePost(req.params.id);

    res.status(204).send();
});

module.exports = router;