const { Model, DataTypes, literal } = require('sequelize');
const { database } = require('../../database/db/dbconfig');

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    metric: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    uinity_price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: literal('NOW()')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: literal('NOW()')
    }
}, {
    sequelize: database,
    modelName: 'product'
})

module.exports = Product;