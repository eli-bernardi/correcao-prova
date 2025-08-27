let arr = [], arr17 = [], arr19 = []


function gerarValores(min, max) {

    for (let i = 0; i < max; i++) {
        arr.push(min + i)
        // poluicao[i] = gerarAleatorio(min,max)
    }
    console.log(arr)
}

function classificar_17_19(qtde) {
    let soma17 = 0, soma19 = 0, media17 = 0, media19 = 0
    for (let i = 0; i < qtde; i++) {
        if (arr[i] % 17 === 0) {
            arr17.push(arr[i])
            soma17 += arr[i]
        } else if (arr[i] % 19 === 0) {
            arr19.push(arr[i])
            soma19 += arr[i]
        }
    }
    console.log(`Números multiplos de 17: ${arr17}`)
    console.log(`Números multiplos de 19: ${arr19}`)
    console.log(`------------------------------------`)
    media17 = soma17 / arr17.length
    media19 = soma19 / arr19.length

    console.log(`Soma dos Números multiplos de 17: ${soma17}`)
    console.log(`Soma dos Números multiplos de 19: ${soma19}`)
    console.log(`------------------------------------`)
    console.log(`Media dos Números multiplos de 17: ${media17.toFixed(2)}`)
    console.log(`Media dos Números multiplos de 19: ${media19.toFixed(2)}`)
}
function principal() {
    let min = 200, max = 400, qtde = 200
    gerarValores(min, max, qtde)
    classificar_17_19(qtde)
}

principal()