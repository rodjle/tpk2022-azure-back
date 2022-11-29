const database = require("../../database/db/dbconfig");
const Role = require("./Role");

const getRoles = async () => {
    const roles = await Role.findAll();
    return roles;
}

const getRole = async (id) => {
    const role = await Role.findOne({ where: { id: id } });

    return role;
}

const createRole = async (body) => {
    const { name } = body;
    const newRole = await Role.create({ name })

    return newRole;
}

const updateRole = async (id, body) => {
    const { name } = body;

    const role = await Role.findOne({ where: { id: id } });
    role.name = name;
    await role.save();
    return role;
}

const deleteRole = async (id) => {
    const destroyedRole = await Role.destroy({ where: { id: id } });

    return destroyedRole;
}

const findByName = async (name) => {
    const role = await Role.findOne({ where: { name: name } });
    return role;
}

module.exports = { getRoles, getRole, createRole, updateRole, deleteRole, findByName }