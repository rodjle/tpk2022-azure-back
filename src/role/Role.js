const { Model, DataTypes } = require('sequelize');
const { database } = require('../../database/db/dbconfig.js');

class Role extends Model { }

Role.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: database,
    modelName: 'role'
});

module.exports = Role;