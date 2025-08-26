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
            resolve(msg)
        }, tempo)
    })
}

function baixaPagina() {
    const emCache = true

    if (emCache) {
        return Promise.reject('Pagina em cache')
    } else {
        return espera('Baixei a pagina', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e =>
        console.log("ERRO", e)
    )