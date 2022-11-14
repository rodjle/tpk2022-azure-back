const { Sequelize } = require('sequelize');



//Existem dados sensíveis aqui - pensar em usar .env e keyvault
//tpk2022=nome do database
//rodjle=usuario
//senha=senha //cuidado , dados sensiveis
const database = new Sequelize('tpk2022','rodjle','senha',{
    dialect:'mysql',
    host:'rodjlemysql.mysql.database.azure.com', //se for local localhost
    port:'3306'
}); // Example for mysql

async function check(){
  console.log('***Tentando autenticar***');
try {
    await database.authenticate();
    console.log('*** Conexão com banco de dados estabelecida com sucesso***');
  } catch (error) {
    console.error('Erro: Não foi possível estabelecer uma conexão com banco de dados:', error);
  }
}

module.exports={database,check};
