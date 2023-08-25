// aqui criamos especie que é um pouco mais como global, serve para todos os animais.
class Animal {
    // Aqui é o construtro que serve para criar as caracteristicas ou ações que cada class executa
    constructor(especie) {
        this.especie = especie
    }

    falar(){
        console.log(this.especie + ' fala') // exemplo de ações
    }

    comer(){
        console.log(this.especie + ' come')
    }

    dormir(){
        console.log(this.especie + ' dorme')
    }

}

// aqui estamos criando especificamente ações para o gato, fazendo uma extenção com as ações de espécie
class Gato extends Animal{
    falar(){
        console.log(this.especie + ' miau miau') // exemplo de ação.
    }
}

const cachorro = new Animal('cachorro')
const gato = new Gato('gato')

cachorro.falar()
cachorro.comer()
cachorro.dormir()
gato.falar()