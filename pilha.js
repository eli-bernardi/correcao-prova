// lIFO = Last In First Out
let arr = [4, 6, 3, 2, 8]

function principal() {
    let arrPilha = []
    let n = arr.length

    arr.sort()
    console.log(arr.pop())

    for (let i = 0; i < n; i++) {
        arrPilha.push(arr.pop())
    }
    console.log(arrPilha)
}
principal()