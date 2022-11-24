const produtoDao = require('../database/dao/produto-dao');
const Produto = require("../database/models/produto");

describe('Produto DAO',() => { 
    it('buscaTodosDados()', async() => {
        let mockValue = []
        const databaseSpy = jest.spyOn(Produto, 'findAll');
        databaseSpy.mockReturnValue(mockValue);

        //execução
        const res=await produtoDao.buscaTodosDados();
        expect(res).toBe(mockValue)
    })

    it('buscaDados()', async() => {
        let mockValue = {}
        const databaseSpy = jest.spyOn(Produto, 'findByPk');
        databaseSpy.mockReturnValue(mockValue);

        //execução
        const res=await produtoDao.buscaDados(1);
        expect(res).toBe(mockValue)
    })

    it('gravarDados() com sucesso', async() => {
        let mockValue = true
        const databaseSpy = jest.spyOn(Produto, 'create');
        databaseSpy.mockReturnValue(mockValue);

        //execução
        const res=await produtoDao.gravarDados({});
        expect(res).toBe(mockValue)
    })

    it('atualizarDados() com sucesso', async() => {
        let mockValue = true
        const databaseSpy = jest.spyOn(Produto, 'update');
        databaseSpy.mockReturnValue(mockValue);

        //execução
        const res=await produtoDao.atualizarDados(1, {});
        expect(res).toBe(mockValue)
    })

    it('sum()', () => {
        const res= produtoDao.sum(1, 2);
        expect(res).toBe(3)
    })

    it('minus()', () => {
        const res= produtoDao.minus(3, 2);
        expect(res).toBe(1)
    })

    it('multiply()', async() => {
        const res= produtoDao.multiply(3, 2);
        expect(res).toBe(6)
    })

    it('divide()', () => {
        const res=  produtoDao.divide(2, 1);
        expect(res).toBe(2)
    })

    it('sum2()', () => {
        const res= produtoDao.sum2(1, 2);
        expect(res).toBe(3)
    })

    it('minus()2', () => {
        const res= produtoDao.minus2(3, 2);
        expect(res).toBe(1)
    })

    it('multiply2()', async() => {
        const res= produtoDao.multiply2(3, 2);
        expect(res).toBe(6)
    })

    it('divide2()', () => {
        const res=  produtoDao.divide2(2, 1);
        expect(res).toBe(2)
    })

    it('sum3()', () => {
        const res= produtoDao.sum3(1, 2);
        expect(res).toBe(3)
    })

    it('minus3()', () => {
        const res= produtoDao.minus3(3, 2);
        expect(res).toBe(1)
    })

    it('multiply3()', async() => {
        const res= produtoDao.multiply3(3, 2);
        expect(res).toBe(6)
    })

    it('divide3()', () => {
        const res=  produtoDao.divide3(2, 1);
        expect(res).toBe(2)
    })

    it('sum4()', () => {
        const res= produtoDao.sum4(1, 2);
        expect(res).toBe(3)
    })

    it('minus4()', () => {
        const res= produtoDao.minus4(3, 2);
        expect(res).toBe(1)
    })

    it('multiply4()', async() => {
        const res= produtoDao.multiply4(3, 2);
        expect(res).toBe(6)
    })

    it('divide4()', () => {
        const res=  produtoDao.divide4(2, 1);
        expect(res).toBe(2)
    })

    it('sum5()', () => {
        const res= produtoDao.sum5(1, 2);
        expect(res).toBe(3)
    })

    it('minus5()', () => {
        const res= produtoDao.minus5(3, 2);
        expect(res).toBe(1)
    })

    it('multiply5()', async() => {
        const res= produtoDao.multiply5(3, 2);
        expect(res).toBe(6)
    })

    it('divide5()', () => {
        const res=  produtoDao.divide5(2, 1);
        expect(res).toBe(2)
    })
});
