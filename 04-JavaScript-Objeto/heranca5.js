console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// todos aqui retornarão function, toda função têm um atributo chamado .prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () { //to string é padrão do js, fazer isso vai causar problemas
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())

//nao substituir metodos já definidos pela linguagem, crie outros