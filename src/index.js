
const user01 = new Object()
user01.id = 1
user01.name = 'Jhony'
user01.idade = 25

const user02 = new Object()
user02.id = 2
user02.name = 'Marcos'
user02.idade = 30




user02.idade = user02.idade + 1 // output será idade: 31 pis vai somar o valor atual com o 1
// console.log(Object.entries(user01)) - sem [] você executa apenas um objeto, com as [] você pode chamar todos os obejtos de uma só vez.
console.log(Object.entries([user02, user01]))



Object.defineProperty(user01, 'cpf', {
    enumerable: false, // permite enumerar ou não o valor da chave, mostrar a propriedade de determinada chave
    writable: false, // permite alteração do valor ou não
    value: '000.000.000-00' // valor atribuido
})

Object.defineProperty(user02, 'cpf', {
    enumerable: true, // aqui mudamos os valores para ver como fica
    writable: true, // permite alteração do valor ou não
    value: '222.222.222-22' // valor atribuido
})


// nos caso acima o user01 não mostrara o  atributo cpf e seu valor, e não vai permitir a alteração passará de 222... para 333...
// já o user02 tanto vai mostrar o atributo e valor, como também vai permitir a alteração dele


user01.cpf = '111.111.111-11' // tentando atribuir um novo valor ao cpf do user01
user02.cpf = '333.333.333-33' // tentando atribuir um novo valor ao cpf do user02



console.log(Object.entries([user01, user02]))
console.log([user01, user02])


const empresa = 'EBAC' // colocando como valor global atraves de um const

user01.empresa = empresa // exemplo de utilização da const global empresa: 'EBAC' -/- "empresa" é o atributo do objeto e "EBAC" o valor desse atributo

user02.empresa = "Google" // podendo ser colocado um valor exclusivo para o mesmo atributo "empresa"

console.log(user01)
console.log(user02)


user01.filhos = {
    filho01: 'Mateus',
    filho02: 'Ester'
}

console.log(user01)

console.log(Object.entries(user01.filhos)) // neste formato exibirá apenas os valores do subobjeto "filhos"
//console.log(Object.values(user01.filhos.filho01)) // neste formato exibirá apenas os valores do subobjeto "filhos"