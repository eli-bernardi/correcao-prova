let baixo = [], moderado = [], alto = [], poluicao = []

function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function gerarNiveis(qtde) {
    for (let i = 0; i < qtde; i++) {
        poluicao.push(gerarAleatorio(min, max))
        // poluicao[i] = gerarAleatorio(min, max)
    }

}

function classificar() {
    let min = 1, max = 100, qtde = 20
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
    let min = 1, max = 100, qtde = 20
    gerarNiveis(min, max, qtde)
    classificar()
}

principal()