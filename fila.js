// Exercicio : Dado o arrau, considerando que ele é uma fila de valores, coloque em ordem crescente e transfira os dados do array 
// para um novo array chamado arrFila, os valores ordenados usando o conceito de fila.

// Conceito de fila : FIFO (First In First Out) - Primeiro a entrar, primeiro a sair.
let arr = [4, 6, 3, 2, 8]

function principal() {
    let n = arr.length
    let arrFila = []
    console.log(`Array originaal: ${arr}`)

    arr.sort()
    console.log(`Array ordenado: ${arr.sort()}`)

    arr.shift()
    console.log(`Retirada de um valor do arr: ${arr.shift()}`)

    for (let i = 0; i < n; i++) {
        arrFila.push(arr.shift())
    }
    
    console.log(`Valor do array: ${arr}`)
    console.log(`Valor da Fila: ${arrFila}`)
}
principal()