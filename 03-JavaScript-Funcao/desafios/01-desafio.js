//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function valores(a, b){
    a = 7
    b = 5

    console.log('Soma:', a + b)
    console.log('Subtração:', a - b)
    console.log('Multiplicação:', a * b)
    console.log('Divisão:', a / b)
}

valores()

// ------------------------------------------------------------------------
// Outra Solução:

console.log() //pulei linha

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)

