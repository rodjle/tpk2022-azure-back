const express = require('express');
const router = express.Router();
const ProductService = require('./ProductService');

router.get('/produtos', async (req, res) => {
    const dados = await ProductService.buscaTodosDados();
    console.log(dados);
    res.status(200).send(dados);
});

router.get('/produtos/:id', async (req, res) => {
    const id = req.params.id;
    const dados = await ProductService.buscaDados(id);
    console.log(dados);
    res.status(200).send(dados);
});

router.delete('/produtos/:id', async (req, res) => {
    const id = req.params.id
    const dados = await ProductService.removerRegistro(id)
    console.log(dados);
    res.status(200).send(dados);
});

router.post('/produtos', async (req, res) => {
    try {
        const retorno = await ProductService.gravarDados({
            codigo: req.body.codigo,
            descricao: req.body.descricao,
            unidade_medida: req.body.unidade_medida,
            preco_unitario: req.body.preco_unitario,
            estoque: req.body.estoque,
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

router.patch('/produtos/:id', async (req, res) => {
    const id = req.params.id

    try {
        const retorno = await ProductService.atualizarDados(id, {
            codigo: req.body.codigo,
            descricao: req.body.descricao,
            unidade_medida: req.body.unidade_medida,
            preco_unitario: req.body.preco_unitario,
            estoque: req.body.estoque,
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

module.exports = router;