import monthS from './months.js'

const filteredMonths = monthS.filter((months) => {
    return months.days === 31
})

console.log(filteredMonths)
let toPrint = ''
filteredMonths.forEach(month => {
    toPrint += month.month + ', '
});


//Map - funções em arrays de retorno individual (cada valor do array)
let mesCom31 = filteredMonths
let meses = mesCom31.map((mesesCout) => {
    return mesesCout
})


let sumMonthDays = filteredMonths.reduce((prev, next) => {
    return { days: (prev.days) + (next.days) }
})

document.getElementById('main').innerHTML = toPrint + '<br>Soma dos dias dos meses selecionados: ' + sumMonthDays.days + '<br> meses: ' + meses.length



let users = [
    {
        nome: 'teste',
        id: 1,
        category:{
            name: 'a',
        }

    },
    {
        nome: 'teste-2',
        id: 2,
        category:{
            name: 'c',
        }

    },
    {
        nome: 'teste-2',
        id: 3,
        category:{
            name: 'c',
        }

    }
]

let dadosFilter = users.filter((user) => {
    return user.category.name === 'c'
}) 

console.log(dadosFilter)

const resultado = dadosFilter.map((result) => {
    return result.name
})


document.getElementById('main2').innerHTML = 'catgoria c:' + resultado.length