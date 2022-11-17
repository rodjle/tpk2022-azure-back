const database = require("../db/dbconfig");
const Produto = require("../models/produto");

async function buscaTodosDados() {
    return await Produto.findAll();
}

async function buscaDados(id) {
    return await Produto.findByPk(id);
}

async function removerRegistro(id) {
    return await Produto.destroy({ where: { id: id }}).then((rowDeleted) => {
        if(rowDeleted === 1) console.log('Row deleted');
    }).catch((err) => console.log(err))
}

async function gravarDados(dados) {
    try {
        const novoProduto = await Produto.create({
          codigo: dados.codigo,
          descricao: dados.descricao,
          unidade_medida: dados.unidade_medida,
          preco_unitario: dados.preco_unitario,
          estoque: dados.estoque,
        });
        return true;
      } catch (error) {
        console.log("Erro ao incluir um produto: " + error)
        return false;
      }
}

async function atualizarDados(id, dados) {
    try {
        const atualizarProduto = await Produto.update({
          codigo: dados.codigo,
          descricao: dados.descricao,
          unidade_medida: dados.unidade_medida,
          preco_unitario: dados.preco_unitario,
          estoque: dados.estoque,
        }, { where: { id: id }});
        return true;
      } catch (error) {
        console.log("Erro ao atualizar um produto: " + error)
        return false;
      }
}

module.exports = { buscaTodosDados, buscaDados, removerRegistro, gravarDados, atualizarDados };