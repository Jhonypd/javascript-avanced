function Pessoa() {

    // const pessoa = this
    this.idade = 0

    setInterval(() => {
        console.log(this.idade++)
    }, 2000);
}

const p1 = new Pessoa()



/* Arrow Functions
* (p1, p2, ...Pessoa, px) => {}
* (P1, P2) => expressão
* (P1) => {}
*/


// Exemplo

const m01 = ['cat', 'dog', 'mouse']
const m02 = ['apple']
const m03 = [20, 15, 50]
const m04 = ['João', 'Fernando' ]

const mGerais = [m01, m02, m03, m04]

mGerais.map(
    elemento => console.log(elemento.length)
)

