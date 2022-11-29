const express = require('express');
const router = express.Router();
const RoleService = require('./RoleService');
const idNumberControl = require('../shared/idNumberControl');
const { body, validationResult } = require('express-validator');
const ValidationException = require('../shared/ValidationException');

router.get('/roles', async (req, res) => {
    const roles = await RoleService.getRoles();

    res.status(200).send(roles);
});

router.get('/roles/:id', idNumberControl, async (req, res) => {
    const role = await RoleService.getRole(req.params.id);

    if (role) {
        res.status(200).send(role);
    } else {
        res.status(404).send();
    }
});

router.post('/roles', body('name')
    .notEmpty()
    .withMessage('Name cannot be blank.')
    .bail()
    .custom(async (name) => {
        const role = await RoleService.findByName(name);
        if (role) {
            throw new Error('already exists');
        }
    }),
    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return next(new ValidationException(errors.array()));
        }

        const newRole = await RoleService.createRole(req.body);

        res.status(200).send(newRole);
    });

router.put('/roles/:id', idNumberControl, async (req, res, next) => {
        // Validar campos do parciais update se preenchidos
        // tratar duplicidade do name
        const updatedRole = await RoleService.updateRole(req.params.id, req.body);

        res.status(200).send(updatedRole)
    });

router.delete('/roles/:id', idNumberControl, async (req, res) => {
    await RoleService.deleteRole(req.params.id);

    res.status(204).send();
});

module.exports = router;