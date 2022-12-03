console.log(soma(3, 4))

// function declaration 
function soma(x, y) { //nesse tipo de função ela é carregada antes de todo o código, a linha de cima retornará a soma
    return x + y
}

// function expression
const sub = function (x, y) { //em ambas funções anonima e named, o retorno só será possivel apos sua declaração
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))