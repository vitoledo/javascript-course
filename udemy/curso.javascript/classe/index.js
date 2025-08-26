class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} esta falando!`)
    }

    comer() {
        console.log(`${this.nome} esta comendo!`)

    }

    beber() {
        console.log(`${this.nome} esta bebendo!`)

    }
}

const p1 = new Pessoa('Luiz', 'Miranda')

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p2 = new Pessoa2('Jose', 'Bezerra')

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} esta falando!`)
}