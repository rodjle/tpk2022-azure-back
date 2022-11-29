const { Model, DataTypes } = require('sequelize');
const { database } = require('../../database/db/dbconfig');

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database,
    modelName: 'user'
});

module.exports = User;