let frutas = ['Maça', 'Banana', 'uva'] //Criando um array --> pode ser com New Array()
console.log(frutas.length) //Verificar quantos elementos tem no array(lista)

//Exibir primeiro valor do array(lista)
let primeiraFruta = frutas[0]
console.log(primeiraFruta)

//exibir ultimo valor do array(lista)
let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

//Permite percorrer toda a lista e identificar todos os itens
frutas.forEach(function(fruta){
    console.log(frutas)
})

//adicionar novo valor no array(lista)
frutas.push('Pera')

frutas.forEach((frutas) => { // Mesma coisa que o forEach(function(frutas))
    console.log(frutas)
})

frutas.pop() //Remover o ultimo item da lista

//Json ==> Uma das opções mais utilizadas para comunicação entre seviços web
var jsonJS = [
    {
        "nome": function(){
            return 'João'
        },
        "idade": "42"
    },
    {
        "nome": "Maria",
        "idade": 25
    }
]

console.log(jsonJS)
//console.log(jsonJS[0].nome()) <== Mostrar apenas a função nome

const jsonRest ={
    "nome" : "Daniel",
    "idade" : 25
}

console.log(jsonRest)

console.log(JSON.stringify(jsonJS)) //Transformar em uma string

const texto = '[{"idade":"42"},{"nome":"Maria","idade":25}]'
console.log(JSON.parse(texto)) //Transformar em objeto



