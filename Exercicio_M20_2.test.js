const { maiorNum, listaNum } = require('./Exercicio_M20_2')

describe('Teste Exercicio 2', () => {
    it('Deve verificar se o maior numero está sendo apresentado', () => {
        expect(maiorNum(listaNum)).toBe(9)
    });
})


