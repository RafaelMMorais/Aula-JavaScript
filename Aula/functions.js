//Função normal
function ola(param){
    return `Olá ${param}`
}
console.log(ola('mundo'));

//Função anonima
(function (param){
    console.log(param)
})('Olá auto')

var ola = function ola(param){
    return `Olá ${param}`
}
console.log(ola('Ola mundo 2'))

//Arrow Functions
const dobro = (valor) => {
    return valor * 2
}
console.log(dobro(4))

const dobro2 = valor => valor * 2
console.log(dobro(5))

let hello = () => console.log('Hello')
hello()

let hello2 = _ => console.log('Hello')
hello2()

const adiciona = (a, b, c) => a + b + c
console.log(adiciona(1, 2, 3))

const multiplica = (a = 2, b = 3, c = 1) => a * b * c // Valores padroes (default)
console.log(multiplica(2, 2, 2))
console.log(multiplica(2, 3))
console.log(multiplica(5))
