const express = require('express');
const router = express.Router();
const UserService = require('./UserService');
const idNumberControl = require('../shared/idNumberControl');
const { body, validationResult } = require('express-validator');
const ValidationException = require('../shared/ValidationException');

router.get('/users', async (req, res) => {
    const users = await UserService.getUsers();

    res.status(200).send(users);
});

router.get('/users/:id', idNumberControl, async (req, res) => {
    const user = await UserService.getUser(req.params.id);

    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send();
    }
});

router.post('/users', async (req, res, next) => {
    const newUser = await UserService.createUser(req.body);

    res.status(200).send(newUser);
});

router.put('/users/:id', idNumberControl, async (req, res, next) => {
    // Validar campos do parciais update se preenchidos
    // tratar duplicidade do name
    const updatedUser = await UserService.updateUser(req.params.id, req.body);

    res.status(200).send(updatedUser)
});

router.delete('/users/:id', idNumberControl, async (req, res) => {
    await UserService.deleteUser(req.params.id);

    res.status(204).send();
});

module.exports = router;