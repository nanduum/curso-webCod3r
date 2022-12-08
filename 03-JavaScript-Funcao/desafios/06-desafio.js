// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * (taxa / 100) * tempo)
}

console.log(jurosSimples(1800, 3, 12))

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + (taxa / 100)) ** tempo
}

console.log(jurosCompostos(1800, 3, 12))


