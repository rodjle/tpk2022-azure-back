const { Model, DataTypes } = require('sequelize');
const { database } = require('../db/dbconfig.js');

class Comment extends Model { }

Comment.init({
    description: {
        type: DataTypes.STRING
    },
    postId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: database,
    modelName: 'comment'
});

module.exports = Comment;