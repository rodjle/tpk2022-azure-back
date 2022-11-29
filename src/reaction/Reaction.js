const { Model, DataTypes } = require('sequelize');
const { database } = require('../../database/db/dbconfig');

class Reaction extends Model { }

Reaction.init({
    upvote: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: database,
    modelName: 'reaction'
});

module.exports = Reaction;