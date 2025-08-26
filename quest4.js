let res = document.getElementById('res')
let baixo = [], moderado = [], alto = [], poluicao = []

function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function gerarNiveis(min,max,qtde) {
    let mediaGeral = 0, soma = 0
    for (let i = 0; i < qtde; i++) {
        poluicao.push(gerarAleatorio(min, max))
        // poluicao[i] = gerarAleatorio(min,max)
        soma += poluicao[i]
    }
    mediaGeral = soma / qtde
    return mediaGeral
}

function classificar() {
    for (let i = 0; i < poluicao.length; i++) {
        if (poluicao[i] >= 1 && poluicao[i] <= 30) {
            baixo.push(poluicao[i])
        }
        else if (poluicao[i] >= 31 && poluicao[i] <= 70) {
            moderado.push(poluicao[i])
        }
        else if (poluicao[i] >= 71 && poluicao[i] <= 100) {
            alto.push(poluicao[i])
        }
    }
}
function principal() {
    res.innerHTML = ``
    let min = 1, max = 100, qtde = 20
    let mediaGeral = gerarNiveis(min, max, qtde)
    
    res.innerHTML 
    res.innerHTML = 
    res.innerHTML = `<h2>Relatório de Poluição do Ar</h2>`
    res.innerHTML += `<p>Valores de Poluição: ${poluicao}</p><br> `
    res.innerHTML += `<p>Média Geral: ${mediaGeral.toFixed(2)}</p><br>`
    classificar()
    res.innerHTML += `<p>Níveis de Poluição: ${poluicao}</p><br>`
    res.innerHTML += `<p>Níveis Baixos: ${baixo}</p>`
    res.innerHTML += `<p>Dias de Níveis Baixos: ${baixo.length}</p><br>`
    res.innerHTML += `<p>Níveis Moderados: ${moderado}</p> <br>`
    res.innerHTML += `<p>Dias de Níveis Moderados: ${moderado.length}</p><br>`
    res.innerHTML += `<p>Níveis Altos: ${alto}</p><br>`
    res.innerHTML += `<p>Dias de Níveis Altos: ${alto.length}</p><br>`
        // console.log('---------------------------------------------')

    // console.log(`Média Geral: ${mediaGeral}`) 
    // console.log('---------------------------------------------')
    // classificar()
    // console.log(`Níveis de Poluição: ${poluicao}`) 
    // console.log('---------------------------------------------')
    // console.log(`Níveis Baixos: ${baixo}`)
    // console.log(`Dias de Níveis Baixos: ${baixo.length}`)
    // console.log('---------------------------------------------')
    // console.log(`Níveis Moderados: ${moderado}`)
    // console.log(`Dias de Níveis Moderados: ${moderado.length}`)
    // console.log('---------------------------------------------')
    // console.log(`Níveis Altos: ${alto}`)
    // console.log(`Dias de Níveis Altos: ${alto.length}`)
}
