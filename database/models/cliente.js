const Sequelize=require('sequelize');
const {database}=require('../db/dbconfig.js');

const Cliente=database.define('cliente',{
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
    nome:{
        allowNull:false,
        type:Sequelize.STRING(100),   
    },
    endereco:Sequelize.STRING(100),
    cep:{
        type:Sequelize.INTEGER,
        allowNull:true,
        defaultValue:0
    },
});

module.exports=Cliente;