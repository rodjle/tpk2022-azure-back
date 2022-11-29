const { Model, DataTypes } = require('sequelize');
const { database } = require('../../database/db/dbconfig');

class Project extends Model { }

Project.init({
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
    events: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database,
    modelName: 'project'
});

module.exports = Project;