const database = require("../../database/db/dbconfig");
const User = require("./User");

const getUsers = async () => {
    const users = await User.findAll();
    return users;
}

const getUser = async (id) => {
    const user = await User.findOne({ where: { id: id } });

    return user;
}

const createUser = async (body) => {
   // const { name } = body;
    const newUser = await User.create(body)

    return newUser;
}

const updateUser = async (id, body) => {
    const { name } = body;

    const user = await User.findOne({ where: { id: id } });
    user.name = name;
    await user.save();
    return user;
}

const deleteUser = async (id) => {
    const destroyedUser = await User.destroy({ where: { id: id } });

    return destroyedUser;
}


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }