// usando callback function
const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
function callbackFilter(valor, indice, array) {
    return valor > 10
}
const maiorDezz = numero.filter(callbackFilter)

console.log(maiorDezz)

// usando arrow function
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const maiorDez = numeros.filter(n => n > 10)

console.log(maiorDez)

// filtro de array com objetos
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 45 },
    { nome: 'wallace', idade: 22 },
    { nome: 'eduardo', idade: 78 },
    { nome: 'victor', idade: 90 },
    { nome: 'manuela', idade: 10 },
]

const pessoasNomeGrande = pessoas.filter(p =>  p.nome.length >= 5)
console.log(pessoasNomeGrande)

const pessoasMaisCinquenta = pessoas.filter(p =>  p.idade > 50)
console.log(pessoasMaisCinquenta)

const pessoasNomeTerminaA = pessoas.filter(p =>  p.nome.toLowerCase().endsWith('a'))
console.log(pessoasNomeTerminaA)