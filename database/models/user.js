const { Model, DataTypes } = require('sequelize');
const { database } = require('../db/dbconfig.js');

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    birthdate: {
        type: DataTypes.DATE
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    roleId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize: database,
    modelName: 'user'
});

module.exports = User;