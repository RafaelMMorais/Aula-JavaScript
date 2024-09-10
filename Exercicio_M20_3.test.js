const { somar, mult5, mult7 } = require('./Exercicio_M20_3')

describe('Teste Exercicio 3', () => {
    it('Deve apresentar a soma de todos os numeros multiplos de 5 e 7', () => {
        expect(mult5 + mult7).toBe(171571)
    });
})



