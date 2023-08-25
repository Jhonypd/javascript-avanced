 ## Classes

### Nesta parte, estamos definindo a classe Movimentacao, que representa uma única transação financeira. Vamos analisar o construtor da classe:

### constructor(banco = 'padrão', nome = '', saldo = 0): Este é o construtor da classe Movimentacao, que aceita três parâmetros opcionais: banco, nome e saldo. Se algum desses parâmetros não for fornecido ao criar uma instância da classe, os valores padrão serão usados.

### this.banco = banco: Isso atribui o valor do parâmetro banco ao atributo banco da instância de Movimentacao.

### this.nome = nome: Isso atribui o valor do parâmetro nome ao atributo nome da instância de Movimentacao.

### this.saldo = saldo: Isso atribui o valor do parâmetro saldo ao atributo saldo da instância de Movimentacao.

### Portanto, a classe Movimentacao é usada para criar objetos que representam uma movimentação financeira com informações sobre o banco, o nome da transação e o saldo associado a essa movimentação.

### Por exemplo, ao criar uma instância da classe Movimentacao da seguinte maneira: 


`
class Movimentacao {
    constructor(banco = 'padrão', nome = '', saldo = 0) {
        this.banco = banco,
            this.nome = nome,
            this.saldo = saldo
    }
}
`


### Aqui, temos a classe Registro. Ela possui um construtor que aceita três parâmetros: dia, mes e ano, que representam a data de registro. Além disso, a classe tem um array movimentacoes para armazenar as movimentações associadas a esse registro.

`

class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano,
            this.movimentacoes = []
    }

`    
### A função novaMovimentacao aceita um número variável de argumentos (usando o operador spread ...) que são objetos do tipo Movimentacao. Ela itera sobre esses objetos e os adiciona ao array movimentacoes.
    
`
    novaMovimentacao(...movimentacoes) {
        movimentacoes.forEach(
            lacamento => this.movimentacoes.push(lacamento)
        )
    }
`

    
   ### Dentro da função resumo, temos o seguinte:
    
   ### let valorAtualizado = 0;: Inicializamos uma variável valorAtualizado com o valor zero. Esta variável será usada para acumular o saldo das movimentações.
    
   ### this.movimentacoes.forEach(lancamento => { ... });: Aqui, usamos o método forEach para iterar sobre cada elemento no array movimentacoes da instância de Registro. Para cada movimentação (lancamento), executamos o seguinte bloco de código:
    
   ### valorAtualizado += lancamento.saldo;: Incrementamos o valor da variável valorAtualizado com o saldo da movimentação atual. Isso significa que estamos somando o saldo de cada movimentação para calcular o saldo total.
   ### return valorAtualizado;: Finalmente, retornamos o valor acumulado (valorAtualizado), que representa o saldo total das movimentações associadas a esse registro.
    
    `
    resumo() {
        let valorAtualizado = 0
        this.movimentacoes.forEach(lacamento => {
            valorAtualizado += lacamento.saldo
        })
        return valorAtualizado
    }
    `
}
`


### Aqui, estamos criando quatro instâncias da classe Movimentacao com diferentes valores de banco, nome e saldo.
### Por exemplo, ao criar uma instância da classe Movimentacao da seguinte maneira:

`
const m01 = new Movimentacao('Bank Y', 'deposito', 50.000)
`

### Os atributos da instância m01 serão definidos da seguinte forma:

`
m01.banco será igual a 'Bank y'
m01.nome será igual a 'deposito'
m01.saldo será igual a 50.000


const m01 = new Movimentacao('Bank X', 'salario', 20.000)
const m02 = new Movimentacao('Bank X', 'comissao', 2.000)
const m03 = new Movimentacao('Bank X', 'imposto', -5.000)
const m04 = new Movimentacao('Bank X', 'aluguel', -1.000)
`


### Aqui, estamos criando uma instância da classe Registro com a data 17/8/2023. Em seguida, usamos o método novaMovimentacao para adicionar as instâncias de Movimentacao (m01, m02, m03 e m04) ao registro.

### Finalmente, imprimimos no console o resultado do método resumo, que calcula e exibe o saldo total das movimentações associadas a esse registro.


`
const registro01 = new Registro(17, 8, 2023)
registro01.novaMovimentacao(m01, m02, m03, m04)
console.log('Comprovante dos regitors: ' + registro01.resumo() + '.000')
`




