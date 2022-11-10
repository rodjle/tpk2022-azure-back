const database = require("../db/dbconfig");
const Cliente = require("../models/cliente");

//sugestão -- que tal criar uma interface e implementar?

async function gravarDados(dados) {
  try {
    const novoCliente = await Cliente.create({
      codigo: dados.codigo,
      nome: dados.nome,
      endereco: dados.endereco,
    });
    return true;
  } catch (error) {
    console.log("Erro ao incluir um cliente: "+error)
    return false;
  }
}

async function buscaTodosDados() {
  return await Cliente.findAll();
}

async function buscaDados(codigoCliente) {
  return await Cliente.findAll({
    where: {
      codigo: codigoCliente,
    },
  });
}

module.exports = {
  gravarDados,
  buscaDados,
  buscaTodosDados,
};
