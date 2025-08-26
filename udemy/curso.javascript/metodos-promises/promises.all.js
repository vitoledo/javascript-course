function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO')
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// Promise.all
const promises = [
    'primeiro valor',
    espera('promise 1', 3000),
    espera('promise 2', 1000),
    espera('promise 3', 1500),
    espera(100, 1500),
    'ultimo valor'
]

Promise.all(promises)
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })