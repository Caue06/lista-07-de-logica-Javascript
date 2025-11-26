const exercicio01 = document.querySelector("#ex01")
const exercicio02 = document.querySelector("#ex02")
const exercicio03 = document.querySelector("#ex03")
const exercicio04 = document.querySelector("#ex04")
const exercicio05 = document.querySelector("#ex05")
const exercicio06 = document.querySelector("#ex06")
const exercicio07 = document.querySelector("#ex07")
const exercicio08 = document.querySelector("#ex08")
const exercicio09 = document.querySelector("#ex09")
const exercicio10 = document.querySelector("#ex10")
const exercicio11 = document.querySelector("#ex11")
const exercicio12 = document.querySelector("#ex12")
const exercicio13 = document.querySelector("#ex13")
const exercicio14 = document.querySelector("#ex14")
const exercicio15 = document.querySelector("#ex15")
const res = document.querySelector(".res")

exercicio01.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz = []

    for (let contadora = 0; contadora < 3; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < 3; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um numero: "))
        }
    }

    for (let linha of matriz) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
        }
        res.innerHTML += "<br>"
    }

    // 1) Faça um programa que leia uma matriz 3x3 de números inteiros e exiba a matriz na tela.
})

exercicio02.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz = []
    let soma = 0

    for (let contadora = 0; contadora < 2; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < 2; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digte um número: "))
        }
    }
    for (let linha of matriz) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
            soma += valor
        }
        res.innerHTML += "<br>"
    }
    res.innerHTML += " A soma dos elementos da matriz é: " + soma

    // 2) Escreva um programa que leia uma matriz 2x2 de números inteiros e calcule a soma de todos os elementos.
})

exercicio03.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz = []
    let colunaLinha = 3
    let posicao = 0
    let soma = 0

    for (let contadora = 0; contadora < colunaLinha; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < colunaLinha; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um numero: "))
        }
    }

    for (let linha of matriz) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
        }
        res.innerHTML += "<br>"
        soma += linha[posicao]
        posicao++
    }

    res.innerHTML += "A soma dos elementos da diagonal da matriz é: " + soma

    // 3) Crie um programa que leia uma matriz 3x3 de números inteiros e exiba a soma dos elementos da diagonal principal.
})

exercicio04.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz1 = []
    let matriz2 = []
    let soma = 0

    for (let contadora1Matriz1 = 0; contadora1Matriz1 < 2; contadora1Matriz1++) {
        matriz1[contadora1Matriz1] = []
        for (let contadora2Matriz1 = 0; contadora2Matriz1 < 2; contadora2Matriz1++) {
            matriz1[contadora1Matriz1][contadora2Matriz1] = parseInt(prompt("Digite um número para a primeira matriz:"))
        }

    }

    for (let contadora1Matriz2 = 0; contadora1Matriz2 < 2; contadora1Matriz2++) {
        matriz2[contadora1Matriz2] = []
        for (let contadora2Matriz2 = 0; contadora2Matriz2 < 2; contadora2Matriz2++) {
            matriz2[contadora1Matriz2][contadora2Matriz2] = parseInt(prompt("Digite um número para a segunda matriz:"))
        }
    }

    for (let linha of matriz1) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
            soma += valor
        }
        res.innerHTML += "<br>"
    }

    for (let linha of matriz2) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
            soma += valor
        }
        res.innerHTML += "<br>"

    }

    res.innerHTML += "A soma dos elementos das duas matrizes é: " + soma



    // 4) Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba a soma das duas matrizes.
})

exercicio05.addEventListener("click", () => {
    res.innerHTML = ""

    let matriz = []
    let maiorValor = Number.MIN_VALUE

    for (let contadora = 0; contadora < 3; contadora++) {
        matriz[contadora] = []

        for (let contadora2 = 0; contadora2 < 3; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um numero: "))
            if (matriz[contadora][contadora2] > maiorValor) {
                maiorValor = matriz[contadora][contadora2]
            }
        }
    }

    for (let linha of matriz) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
        }
        res.innerHTML += "<br>"
    }

    res.innerHTML += "O maior valor da matriz é: " + maiorValor
    // 5) Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o maior valor presente na matriz.
})

exercicio06.addEventListener("click", () => {
    res.innerHTML = ""

    let matriz = []
    let somaTotal = 0
    let quantidadeNumeros = 0

    for (let contadora = 0; contadora < 4; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < 4; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um número: "))
            somaTotal += matriz[contadora][contadora2]
            quantidadeNumeros++
        }
    }

    for (let linha of matriz) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
        }
        res.innerHTML += "<br>"
    }

    res.innerHTML += "A média dos elementos dessa matriz é: " + somaTotal / quantidadeNumeros
    // 6) Crie um programa que leia uma matriz 4x4 de números inteiros e exiba a média aritmética dos elementos.
})

exercicio07.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz1 = []
    let matriz2 = []
    let produto = 1
    for (let contadora1Matriz1 = 0; contadora1Matriz1 < 2; contadora1Matriz1++) {
        matriz1[contadora1Matriz1] = []
        for (let contadora2Matriz1 = 0; contadora2Matriz1 < 2; contadora2Matriz1++) {
            matriz1[contadora1Matriz1][contadora2Matriz1] = parseInt(prompt("Digite um número para a primeira matriz:"))
        }

    }

    for (let contadora1Matriz2 = 0; contadora1Matriz2 < 2; contadora1Matriz2++) {
        matriz2[contadora1Matriz2] = []
        for (let contadora2Matriz2 = 0; contadora2Matriz2 < 2; contadora2Matriz2++) {
            matriz2[contadora1Matriz2][contadora2Matriz2] = parseInt(prompt("Digite um número para a segunda matriz:"))
        }
    }

    for (let linha of matriz1) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
            produto *= valor
        }
        res.innerHTML += "<br>"
    }

    for (let linha of matriz2) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
            produto *= valor
        }
        res.innerHTML += "<br>"
    }

    res.innerHTML += "O produto dos elementos das duas matrizes é: " + produto

    // 7) Faça um programa que leia duas matrizes 2x2 de números inteiros e exiba o produto entre elas.
})

exercicio08.addEventListener("click", () => {
    res.innerHTML = ""

    let matriz = []
    let menorValor = Number.MAX_VALUE

    for (let contadora = 0; contadora < 3; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < 3; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um número: "))
            res.innerHTML += matriz[contadora][contadora2] + " "
            if (matriz[contadora][contadora2] < menorValor) {
                menorValor = matriz[contadora][contadora2]
            }
        }
        res.innerHTML += "<br>"
    }

    res.innerHTML += "O menor valor dessa matriz é: " + menorValor

    // 8) Escreva um programa que leia uma matriz 3x3 de números inteiros e exiba o menor valor presente na matriz.
})

exercicio09.addEventListener("click", () => {
    res.innerHTML = ""

    let matriz = []
    let simetria = true

    for (let contadora = 0; contadora < 3; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < 3; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um numero: "))
            res.innerHTML += matriz[contadora][contadora2] + " "
        }
        res.innerHTML += "<br>"
    }

    for (let contadora = 0; contadora < 3; contadora++) {
        for (let contadora2 = 0; contadora2 < 3; contadora2++) {
            if (matriz[contadora][contadora2] != matriz[contadora2][contadora]) {
                simetria = false
            }
        }
    }
    if (simetria == false) {
        res.innerHTML += "A matriz  não é simétrica"
    } else {
        res.innerHTML += "A matriz é simétrica"

    }

    // 9) Crie um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é simétrica (igual à sua transposta).
})

exercicio10.addEventListener("click", () => {
    res.innerHTML = ""

    let matriz = []
    let somasColunas = [0, 0, 0, 0]
    let posicao = 0

    for (let contadora = 0; contadora < 4; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < 4; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um número: "))
            res.innerHTML += matriz[contadora][contadora2] + " "
        }
        res.innerHTML += "<br>"
    }

    for (let contadora = 0; contadora < 4; contadora++) {
        for (let contadora2 = 0; contadora2 < 4; contadora2++) {
            somasColunas[contadora2] += matriz[contadora][contadora2]
        }
    }

    res.innerHTML += somasColunas
    console.log(somasColunas)

    // 10) Faça um programa que leia uma matriz 4x4 de números inteiros e exiba a soma dos elementos de cada coluna.
})

exercicio11.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz1 = []
    let matriz2 = []
    let igual = true

    for (let contadora1Matriz1 = 0; contadora1Matriz1 < 2; contadora1Matriz1++) {
        matriz1[contadora1Matriz1] = []
        for (let contadora2Matriz1 = 0; contadora2Matriz1 < 2; contadora2Matriz1++) {
            matriz1[contadora1Matriz1][contadora2Matriz1] = parseInt(prompt("Digite um número para a primeira matriz:"))
            res.innerHTML += matriz1[contadora1Matriz1][contadora2Matriz1] + " "
        }
        res.innerHTML += "<br>"
    }

    res.innerHTML += "<br>"

    for (let contadora1Matriz2 = 0; contadora1Matriz2 < 2; contadora1Matriz2++) {
        matriz2[contadora1Matriz2] = []
        for (let contadora2Matriz2 = 0; contadora2Matriz2 < 2; contadora2Matriz2++) {
            matriz2[contadora1Matriz2][contadora2Matriz2] = parseInt(prompt("Digite um número para a segunda matriz:"))
            res.innerHTML += matriz2[contadora1Matriz2][contadora2Matriz2] + " "
        }
        res.innerHTML += "<br>"
    }

    for (let linha = 0; linha < 2; linha++) {
        for (let coluna = 0; coluna < 2; coluna++) {
            if (matriz1[linha][coluna] != matriz2[linha][coluna]) [
                igual = false
            ]
        }
    }

    if (igual == false) {
        res.innerHTML += "As matrizes são diferentes."
    } else {
        res.innerHTML += "As matrizes são iguais."
    }

    console.log(igual)

    //11) Escreva um programa que leia duas matrizes 2x2 de números inteiros e verifique se elas são iguais.
})

exercicio12.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz = []
    let colunaLinha = 3
    let posicao = 2
    let produto = 1

    for (let contadora = 0; contadora < colunaLinha; contadora++) {
        matriz[contadora] = []
        for (let contadora2 = 0; contadora2 < colunaLinha; contadora2++) {
            matriz[contadora][contadora2] = parseInt(prompt("Digite um numero: "))
        }
    }

    for (let linha of matriz) {
        for (let valor of linha) {
            res.innerHTML += valor + " "
        }
        res.innerHTML += "<br>"
        produto *= linha[posicao]
        posicao--
    }

    res.innerHTML += "O produto dos elementos da diagonal secundária da matriz é: " + produto

    // 12) Crie um programa que leia uma matriz 3x3 de números inteiros e exiba o produto dos elementos da diagonal secundária.
})

exercicio13.addEventListener("click", () => {
    res.innerHTML = ""

    let matriz = []
    let linhasMatriz = [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE]
    let numeroColuna = 0

    for (let linha = 0; linha < 4; linha++) {
        matriz[linha] = []
        for (let coluna = 0; coluna < 4; coluna++) {
            matriz[linha][coluna] = parseInt(prompt("Digite um número:"))
            if (matriz[linha][coluna] >= linhasMatriz[numeroColuna]) {
                linhasMatriz[numeroColuna] = matriz[linha][coluna]
            }
            res.innerHTML += matriz[linha][coluna] + " "
        }
        numeroColuna++
        res.innerHTML += "<br>"
    }

    res.innerHTML += "Os maiores números de cada linha:<br>1ª linha: " + linhasMatriz[0] + "<br>2ª linha: " + linhasMatriz[1] + "<br>3ª linha: " + linhasMatriz[2] + "<br>4ª linha: " + linhasMatriz[3]

    // 13) Faça um programa que leia uma matriz 4x4 de números inteiros e exiba o maior valor presente em cada linha.
})

exercicio14.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz = []
    let identidade = true
    let soma = 0

    for (let linha = 0; linha < 3; linha++) {
        matriz[linha] = []
        for (let coluna = 0; coluna < 3; coluna++) {
            matriz[linha][coluna] = parseInt(prompt("Digite um número: "))
            res.innerHTML += matriz[linha][coluna] + " "
            soma += matriz[linha][coluna]
        }
        res.innerHTML += "<br>"
    }

    if (soma != 3) {
        identidade = false
    }

    for (let contadora = 0; contadora < 3; contadora++) {
        if (matriz[contadora][contadora] != 1) {
            identidade = false
        }
    }

    if (identidade == false) {
        res.innerHTML += "A matriz não é identidade."
    } else {
        res.innerHTML += "A matriz é identidade."
    }
    // 14) Escreva um programa que leia uma matriz 3x3 de números inteiros e verifique se ela é uma matriz identidade.
})

exercicio15.addEventListener("click", () => {
    res.innerHTML = ""
    let matriz1 = []
    let matriz2 = []
    let matrizSubtracao = []

    for (let linha = 0; linha < 2; linha++) {
        matriz1[linha] = []
        for (let coluna = 0; coluna < 2; coluna++) {
            matriz1[linha][coluna] = parseInt(prompt("Digite um número para a primeira matriz:"))
            res.innerHTML += matriz1[linha][coluna] + " "
        }
        res.innerHTML += "<br>"
    }

    for (let linha = 0; linha < 2; linha++) {
        matriz2[linha] = []
        for (let coluna = 0; coluna < 2; coluna++) {
            matriz2[linha][coluna] = parseInt(prompt("Digite um número para a segunda matriz:"))
            res.innerHTML += matriz2[linha][coluna] + " "
        }
        res.innerHTML += "<br>"
    }

    res.innerHTML += "As matrizes subtraidas:<br>"

    for (let linha = 0; linha < 2; linha++) {
        matrizSubtracao[linha] = []
        for (let coluna = 0; coluna < 2; coluna++) {
            matrizSubtracao[linha][coluna] = matriz1[linha][coluna] - matriz2[linha][coluna]
            res.innerHTML += matrizSubtracao[linha][coluna] + " "
        }
        res.innerHTML += "<br>"
    }

    // 15) Crie um programa que leia duas matrizes 2x2 de números inteiros e exiba a subtração entre elas.
})