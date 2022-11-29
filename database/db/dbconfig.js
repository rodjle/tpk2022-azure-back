const { Sequelize } = require('sequelize');

const database = new Sequelize('tpk2022', 'superadmin', 'Secretpassword!', {
  dialect: 'mysql',
  host: 'msqldb.mysql.database.azure.com',
  port: '3306'
});

async function check() {
  console.log('***Tentando autenticar***');
  try {
    await database.authenticate();
    console.log('*** Conexão com banco de dados estabelecida com sucesso***');
  } catch (error) {
    console.error('Erro: Não foi possível estabelecer uma conexão com banco de dados:', error);
  }
}

module.exports = { database, check };
