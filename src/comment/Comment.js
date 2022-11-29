const { Model, DataTypes } = require('sequelize');
const { database } = require('../../database/db/dbconfig.js');

class Comment extends Model { }

Comment.init({
    description: {
        type: DataTypes.STRING,
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
    modelName: 'comment'
});

module.exports = Comment;