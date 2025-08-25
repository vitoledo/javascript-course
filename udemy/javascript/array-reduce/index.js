const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// reduce como reduce
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
})
console.log(total)

// reduce como filter
const total2 = numero.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(total2)

// reduce como map
const total3 = number.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2)   
    return acumulador
}, [])
console.log(total3)

// reduce com obj
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 45 },
    { nome: 'wallace', idade: 22 },
    { nome: 'eduardo', idade: 78 },
    { nome: 'victor', idade: 90 },
    { nome: 'manuela', idade: 10 },
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)