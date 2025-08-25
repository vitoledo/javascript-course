//atribução via desestruturação - exemplo 1
const pessoa = {
    nome: 'luiz',
    sobrenome: 'silva',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 320
    }
}
const { nome, sobrenome } = pessoa
//pega o pessoa.nome e o pessoa.sobrenome

console.log(nome, sobrenome)

//atribução via desestruturação - exemplo 2
const person = {
    nome: 'luiz',
    sobrenome: 'silva',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 320
    }
}
const { nome: teste, sobrenome: teste2 } = person

console.log(teste, teste2)

//atribução via desestruturação - exemplo 3
const pessoas = {
    nome: 'luiz',
    sobrenome: 'silva',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 320
    }
}
const { endereco: {rua, numero} } = pessoas

console.log(rua, numero)

//atribução via desestruturação - exemplo 3
const pessoass = {
    nome: 'luiz',
    sobrenome: 'silva',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 320
    }
}
const { nome: teste3,  ...resto } = pessoass

console.log(teste3, resto)