const dbConfig = require('../database/db/dbconfig');

describe('Testando db config', () => {
    it('Test sync do database sucesso', async() => {
        const dbSync = jest.spyOn(dbConfig.database, 'authenticate');
        dbSync.mockReturnValue(true);

        expect(await dbConfig.check()).toBe(undefined)
    });
});