
class Movimentacao {
    constructor(banco = 'padrão', nome = '', saldo = 0) {
        this.banco = banco,
            this.nome = nome,
            this.saldo = saldo
    }
}



class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano,
            this.movimentacoes = []
    }


    novaMovimentacao(...movimentacoes) {
        movimentacoes.forEach(
            lacamento => this.movimentacoes.push(lacamento)
        )
    }

    resumo() {
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('x', 'gi') // expressões regulares
        this.movimentacoes.forEach(lacamento => {
            lacamento.banco = lacamento.banco.replace(regex, 'Y')
            if (!lacamento.banco.match(regex)){
                valorAtualizado += lacamento.saldo
                tipo += lacamento.nome + ' | '
            } 
        })
        return tipo + valorAtualizado
    }
}


const m01 = new Movimentacao('Bank X', 'salario', 20000)
const m02 = new Movimentacao('Bank Y', 'comissao', 2000)
const m03 = new Movimentacao('Bank X', 'imposto', -5000)
const m04 = new Movimentacao('Bank Z', 'aluguel', -1000)


const registro01 = new Registro(17, 8, 2023)
registro01.novaMovimentacao(m01, m02, m03, m04)
console.log('Comprovante dos regitros: ' + registro01.resumo())




