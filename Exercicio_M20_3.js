//Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, 
//ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne 
//a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

let mult5 = 0
let mult7 = 0
somar(1000);
function somar(limite){
    for(i = 0; i <= limite; i++)
    {
        if(i % 5 === 0){mult5 += i}
        if(i % 7 === 0){mult7 += i}
    }
}

console.log(mult5 + mult7)

module.exports = { somar, mult5, mult7 }
