const { Model, DataTypes } = require('sequelize');
const { database } = require('../db/dbconfig.js');

class Project extends Model { }

Project.init({
    status: {
        type: DataTypes.STRING
    },
    events: {
        type: DataTypes.JSON
    },
    postId: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: database,
    modelName: 'project'
});

module.exports = Project;