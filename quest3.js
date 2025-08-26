let temperatura = [15, 12, 18, 25, 19, 21, 17, 19, 14, 30, 17, 23, 16, 20, 11, 28, 10, 22, 15, 32, 13, 18, 16, 23, 27, 24, 31, 34, 26, 29]
let baixa = [], media = [], alta = []

function classificar() {
    for (let i = 0; i < temperatura.length; i++) {
         if (temperatura[i] >= 10 && temperatura[i] <= 20) {
            baixa.push(temperatura[i])
        }
        else if (temperatura[i] >= 21 && temperatura[i] <= 30) {
            media.push(temperatura[i])
        }
        else if (temperatura[i] >= 31 && temperatura[i] <= 40) {
            alta.push(temperatura[i])
        }
    }
}
function principal() {
    classificar()
    console.log('Temperaturas Baixas: ${baixa}')
    console.log('Temperaturas Baixas: ${media}')
    console.log('Temperaturas Baixas: ${alta}')
}



principal()
// let nome = 'Eliel'
// let novoNome = nome.toLocaleUpperCase()
// let nomeMinusculo = nome.toLocaleLowerCase()
// let nomeCurto = nome



// // console.table(temperatura)
// // console.log('-------------------')
// // console.log(temperatura.length)
// // console.log('-------------------')
// // console.log(temp.length)
// // console.log('-------------------')

// // let x = 10 / temp.length
// // console.log(x)
// // console.log('-------------------')

// // let y = '2' / 2
// // console.log(y)
// // console.log('-------------------')

// // let a = 1
// // if (y === a) {
// //     console.log('Verdadeiro')
// // } else {
// //     console.log('Falso')
// // }
// // console.log('-------------------')

// // let z = 'a' / 2
// // console.log(z)
// // console.log('-------------------')