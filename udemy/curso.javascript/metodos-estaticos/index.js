class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    // metodo de instancia
    aumentarVolume() {
        this.volume += 2
    }
    diminuirVolume() {
        this.volume -= 2
    }
    // metodo estatico
    static trocarPilha() {
        console.log('Ok, vou trocar!')
    }
}

const controle1 = new ControleRemoto('LG')

// metodos de instancia mexem com instancias
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
console.log(controle1)

// metodos estaticos apemas funcionam com classes
ControleRemoto.trocarPilha()