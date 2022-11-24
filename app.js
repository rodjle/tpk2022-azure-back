var express = require("express");
var bodyParser = require("body-parser");
//métodos CRUD para manipular clientes
const produtoDao = require('./database/dao/produto-dao');

//middleware - irá fazer um parser do dados do front e formatar em req.body
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Listar todos os produtos
app.get('/produtos', async (req, res) => {
  const dados = await produtoDao.buscaTodosDados();
  console.log(dados);
  res.status(200).send(dados);
});

// Listar um pordutor por id
app.get('/produtos/:id', async (req, res) => {
  const id = req.params.id;
  const dados = await produtoDao.buscaDados(id);
  console.log(dados);
  res.status(200).send(dados);
});

// Deletar um produto 
app.delete('/produtos/:id', async (req, res) => {
  const id = req.params.id
  const dados = await produtoDao.removerRegistro(id)
  console.log(dados);
  res.status(200).send(dados);
});

// Cadastrar um produto
app.post('/produtos', async (req, res) => {
  try {
    const retorno = await produtoDao.gravarDados({
      codigo: req.body.codigo,
      descricao:  req.body.descricao,
      unidade_medida:  req.body.unidade_medida,
      preco_unitario:  req.body.preco_unitario,
      estoque:  req.body.estoque,
    });

    console.log("Ao salvar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201).send("Ok");
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
})

// Atualizar um produto 
app.patch('/produtos/:id', async (req, res) => {
  const id = req.params.id

  try {
    const retorno = await produtoDao.atualizarDados(id, {
      codigo: req.body.codigo,
      descricao:  req.body.descricao,
      unidade_medida:  req.body.unidade_medida,
      preco_unitario:  req.body.preco_unitario,
      estoque:  req.body.estoque,
    });

    console.log("Ao atualizar o registro retornou: " + retorno);
    if (retorno == true) {
      res.status(201).send("Ok");
    } else {
      throw "NOk";
    }
  } catch (error) {
    console.log(error);
    res.status(401).send("NOk");
  }
})

module.exports = app;
