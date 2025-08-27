let arr = [], arrPar = [], arrImpar = []

function gerarAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarValores(min, max, qtde) {
    let mediaGeral = 0, soma = 0
    for (let i = 0; i < qtde; i++) {
        arr.push(gerarAleatorio(min, max))
        // poluicao[i] = gerarAleatorio(min,max)
        console.log(arr)
    }
}

function classificarParImpar(qtde) {
    let somaPar = 0, somaImpar = 0, mediaPar = 0, mediaImpar = 0
    for (let i = 0; i < qtde; i++) {
        if (arr[i] % 2 === 0) {
            arrPar.push(arr[i])
            somaPar += arr[i]
        } else if (arr[i] % 2 === 1) {
            arrImpar.push(arr[i])
            somaImpar += arr[i]
        }
    }
    console.log(`Números Pares: ${arrPar}`)
    console.log(`Números Ímpares: ${arrImpar}`)

    mediaPar = somaPar / arrPar.length
    mediaImpar = somaImpar / arrImpar.length

    console.log(`Soma dos Números Pares: ${somaPar}`)
    console.log(`Soma dos Números Ímpares: ${somaImpar}`)

    console.log(`Media dos Números Pares: ${mediaPar.toFixed(2)}`)
    console.log(`Media dos Números Impares: ${mediaImpar.toFixed(2)}`)
}
function principal() {
    let min = 1, max = 3, qtde = 4
    gerarValores(min, max, qtde)
    classificarParImpar(qtde)
}

principal()