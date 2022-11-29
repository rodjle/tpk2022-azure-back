const express = require('express');
const router = express.Router();
const ReactionService = require('./ReactionService');
const idNumberControl = require('../shared/idNumberControl');
const { body, validationResult } = require('express-validator');
const ValidationException = require('../shared/ValidationException');

router.get('/reactions', async (req, res) => {
    const reactions = await ReactionService.getReactions();

    res.status(200).send(reactions);
});

router.get('/reactions/:id', idNumberControl, async (req, res) => {
    const reaction = await ReactionService.getReaction(req.params.id);

    if (reaction) {
        res.status(200).send(reaction);
    } else {
        res.status(404).send();
    }
});

router.post('/reactions', async (req, res, next) => {
    const newReaction = await ReactionService.createReaction(req.body);

    res.status(200).send(newReaction);
});

router.put('/reactions/:id', idNumberControl, async (req, res, next) => {
    const updatedReaction = await ReactionService.updateReaction(req.params.id, req.body);

    res.status(200).send(updatedReaction)
});

router.delete('/reactions/:id', idNumberControl, async (req, res) => {
    await ReactionService.deleteReaction(req.params.id);

    res.status(204).send();
});

module.exports = router;