
const app=require("../app");
const produtoDao=require("../database/dao/produto-dao");
const request=require("supertest");

describe("Conjunto de testes app",()=>{
    it('Ao tentar listar todos os produtos', async() => {
        const exemploDeProdutos = [{
            id: 1,
            codigo: 1,
            descricao: 'Descrição de exemplo',
            unidade_medida: 'kgs',
            preco_unitario: 10.00,
            estoque: 1,
            createdAt: '2022-11-24',
            updatedAt: '2022-11-24'
        },
        {
            id: 2,
            codigo: 2,
            descricao: 'Descrição de exemplo 2',
            unidade_medida: 'M',
            preco_unitario: 15.00,
            estoque: 50,
            createdAt: '2022-11-24',
            updatedAt: '2022-11-24'
        }]

        const databaseSpy = jest.spyOn(produtoDao, 'buscaTodosDados');
        databaseSpy.mockReturnValue(exemploDeProdutos);

        //execução
        const res=await request(app)
                  .get("/produtos");
        
        //validação
        expect(res.text).toBe(JSON.stringify(exemploDeProdutos));
        expect(res.status).toBe(200);
    });

    it('Ao tentar listar todos os produtos', async() => {
        const produto = {
            id: 1,
            codigo: 1,
            descricao: 'Descrição de exemplo',
            unidade_medida: 'kgs',
            preco_unitario: 10.00,
            estoque: 1,
            createdAt: '2022-11-24',
            updatedAt: '2022-11-24'
        }

        const databaseSpy = jest.spyOn(produtoDao, 'buscaDados');
        databaseSpy.mockReturnValue(produto);

        //execução
        const res=await request(app)
                  .get("/produtos/1");
        
        //validação
        expect(res.text).toBe(JSON.stringify(produto));
        expect(res.status).toBe(200);
    });

    it('Ao tentar deletar um produto', async() => {
        const databaseSpy = jest.spyOn(produtoDao, 'removerRegistro');
        databaseSpy.mockReturnValue({});

        //execução
        const res=await request(app)
                  .delete("/produtos/1");
        
        //validação
        expect(res.text).toBe(JSON.stringify({}));
        expect(res.status).toBe(200);
    });

    it('Ao tentar cadastrar um produto com sucesso', async() => {
        const databaseSpy = jest.spyOn(produtoDao, 'gravarDados');
        databaseSpy.mockReturnValue(true);

        //cenário
        const esperado="Ok";

        //execução
        const res=await request(app)
                  .post("/produtos")
                  .send({codigo: 1,
                  descricao:"des",
                  unidade_medida:"m",
                  preco_unitario: 10.50,
                  estoque: 10});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it('Ao tentar cadastrar um produto sem sucesso', async() => {
        const databaseSpy = jest.spyOn(produtoDao, 'gravarDados');
        databaseSpy.mockReturnValue(false);

        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/produtos")
                  .send({codigo: 1,
                  descricao:"des",
                  unidade_medida:"m",
                  preco_unitario: 10.50,
                  estoque: 10});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(401);
    });

    it('Ao tentar atualizar um produto com sucesso', async() => {
        const databaseSpy = jest.spyOn(produtoDao, 'atualizarDados');
        databaseSpy.mockReturnValue(true);

        //cenário
        const esperado="Ok";

        //execução
        const res=await request(app)
                  .patch("/produtos/1")
                  .send({codigo: 1,
                  descricao:"des",
                  unidade_medida:"m",
                  preco_unitario: 10.50,
                  estoque: 10});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it('Ao tentar atualizar um produto sem sucesso', async() => {
        const databaseSpy = jest.spyOn(produtoDao, 'atualizarDados');
        databaseSpy.mockReturnValue(false);

        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .patch("/produtos/1")
                  .send({codigo: 1,
                  descricao:"des",
                  unidade_medida:"m",
                  preco_unitario: 10.50,
                  estoque: 10});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(401);
    });
})