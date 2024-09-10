const { mdc } = require('./Exercicio_M20_1')

describe('Teste Exercicio 1', () => {
    it('Deve verificar se o mdc está correto', () => {
        expect(mdc(14, 24)).toBe(2)
    });
})


