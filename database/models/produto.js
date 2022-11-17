const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');


const Produto=database.define('produto',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    codigo:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    descricao:{
        type: Sequelize.STRING(100),
        allowNull:false,
    },
    unidade_medida:{
        type:Sequelize.STRING(100),
        allowNull:false,
    },
    preco_unitario:{
        allowNull: false,
        type: Sequelize.DECIMAL,   
    },
    estoque:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
    }
});

module.exports=Produto;