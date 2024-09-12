const { somar } = require('./Exercicio_M20_3')

describe('Teste Exercicio 3', () => {
    it('Deve apresentar a soma de todos os numeros multiplos de 5 e 7 até 1000', () => {
        const res = somar(1000)
        expect(res).toBe(171571)
    });
})



