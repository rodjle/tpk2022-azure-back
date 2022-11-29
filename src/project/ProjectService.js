const database = require("../../database/db/dbconfig");
const Project = require("./Project");

const getProjects = async () => {
    const projects = await Project.findAll();
    return projects;
}

const getProject = async (id) => {
    const project = await Project.findOne({ where: { id: id } });

    return project;
}

const createProject = async (body) => {
    const newProject = await Project.create(body)

    return newProject;
}

const updateProject = async (id, body) => {
    const { name } = body;

    const project = await Project.findOne({ where: { id: id } });
    project.name = name;
    await project.save();
    return project;
}

const deleteProject = async (id) => {
    const destroyedProject = await Project.destroy({ where: { id: id } });

    return destroyedProject;
}


module.exports = { getProjects, getProject, createProject, updateProject, deleteProject }