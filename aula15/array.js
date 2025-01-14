//num[3] = 6 'adiciona o numero 6 no espaço 3'
//num.push(7) 'adiciona o valor 7 no próximo espaço livre do array'
//num.length 'da o numero de espaços dentro do array'
//num.sort() 'organiza os valores dentro do vetor do menos para o maior'
//num.indexOf(7) 'fala em que posição o valor 7 esta'

let num = [4, 9, 7] // [0 1 2]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*for(let i = 0; i <= num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}!`)
}*/

for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}!`)
}