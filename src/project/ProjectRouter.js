const express = require('express');
const router = express.Router();
const ProjectService = require('./ProjectService');
const idNumberControl = require('../shared/idNumberControl');
const { body, validationResult } = require('express-validator');
const ValidationException = require('../shared/ValidationException');

router.get('/projects', async (req, res) => {
    const projects = await ProjectService.getProjects();

    res.status(200).send(projects);
});

router.get('/projects/:id', idNumberControl, async (req, res) => {
    const project = await ProjectService.getProject(req.params.id);

    if (project) {
        res.status(200).send(project);
    } else {
        res.status(404).send();
    }
});

router.post('/projects', async (req, res, next) => {
    const newProject = await ProjectService.createProject(req.body);

    res.status(200).send(newProject);
});

router.put('/projects/:id', idNumberControl, async (req, res, next) => {
    const updatedProject = await ProjectService.updateProject(req.params.id, req.body);

    res.status(200).send(updatedProject)
});

router.delete('/projects/:id', idNumberControl, async (req, res) => {
    await ProjectService.deleteProject(req.params.id);

    res.status(204).send();
});

module.exports = router;