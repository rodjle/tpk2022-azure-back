const { Model, DataTypes } = require('sequelize');
const { database } = require('../db/dbconfig.js');

class Reaction extends Model { }

Reaction.init({
    upvote: {
        type: DataTypes.BOOLEAN
    },
    postId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: database,
    modelName: 'reaction'
});

module.exports = Reaction;