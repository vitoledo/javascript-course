//atribução via desestruturação - exemplo 1
const letras = [i, j, k]
[a, b, c] = letras

console.log(a, b, c)

//atribução via desestruturação - exemplo 2
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const [primeiroNumero, segundoNumero, ...resto] = numeros
//... rest operator, ... spread operator

console.log(primeiroNumero, segundoNumero)
console.log(resto)

//atribução via desestruturação - exemplo 3
const numero = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const [um, , tres, , cinco, , sete] = numero
//... rest operator, ... spread operator

console.log(um, tres, cinco)

//atribução via desestruturação - exemplo 4
const number = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const [, [, , seis]] = number

console.log(seis)
