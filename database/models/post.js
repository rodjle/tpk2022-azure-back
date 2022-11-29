const { Model, DataTypes } = require('sequelize');
const { database } = require('../db/dbconfig.js');

class Post extends Model { }

Post.init({
    title: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: database,
    modelName: 'post'
});

module.exports = Post;