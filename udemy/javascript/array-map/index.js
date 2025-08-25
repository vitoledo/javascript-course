// dobrar valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(n => n * 2)
console.log(numerosEmDobro)

// com objetos
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'maria', idade: 45 },
    { nome: 'wallace', idade: 22 },
    { nome: 'eduardo', idade: 78 },
    { nome: 'victor', idade: 90 },
    { nome: 'manuela', idade: 10 },
]
const apenasNomes = pessoas.map(p => p.nome)
console.log(apenasNomes)

const apenasIdades = pessoas.map(p => ({ idade: p.idade }))
console.log(apenasIdades)

const comIds = pessoas.map(function(obj, indice){
    obj.id = indice + 1
    return obj
})
console.log(comIds)
