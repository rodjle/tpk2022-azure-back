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

function sum(n1, n2){
  return n1 + n2;
}

function minus(n1, n2){
  return n1 - n2;
}

function multiply(n1, n2){
  return n1 * n2;
}

function divide(n1, n2){
  return n1 * n2;
}

function sum2(n1, n2){
  return n1 + n2;
}

function minus2(n1, n2){
  return n1 - n2;
}

function multiply2(n1, n2){
  return n1 * n2;
}

function divide2(n1, n2){
  return n1 * n2;
}

function sum3(n1, n2){
  return n1 + n2;
}

function minus3(n1, n2){
  return n1 - n2;
}

function multiply3(n1, n2){
  return n1 * n2;
}

function divide3(n1, n2){
  return n1 * n2;
}

function sum4(n1, n2){
  return n1 + n2;
}

function minus4(n1, n2){
  return n1 - n2;
}

function multiply4(n1, n2){
  return n1 * n2;
}

function divide4(n1, n2){
  return n1 * n2;
}

function sum5(n1, n2){
  return n1 + n2;
}

function minus5(n1, n2){
  return n1 - n2;
}

function multiply5(n1, n2){
  return n1 * n2;
}

function divide5(n1, n2){
  return n1 * n2;
}

module.exports = {sum5, divide5,multiply5, minus5,sum4, divide4,multiply4, minus4, sum3, divide3, multiply3, minus3,sum2, minus2, divide2, multiply2, divide ,multiply, sum, minus, buscaTodosDados, buscaDados, removerRegistro, gravarDados, atualizarDados };