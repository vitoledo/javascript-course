function rand(min = 0, max = 3) {
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
            return
        }, tempo)
    })
}

// espera('Fase 1', rand())
//     .then(valor => {
//         console.log(valor)
//         return espera('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return espera('Fase 3', rand())
//     }).then(fase => {
//         console.log(fase)
//     })
//     .catch(e => console.log(e))

async function executa() {
    try {
        const fase1 = await espera('Fase 1', rand())
        console.log(fase1)
        const fase2 = await espera('Fase 2', rand())
        console.log(fase2)
        const fase3 = await espera('Fase 3', rand())
        console.log(fase3)
        console.log('Terminamos na fase: ', fase3)
    }catch{
        console.log(e)
    }
}
executa()