const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //retorna as chaves do objeto (nome delas)
console.log(Object.values(pessoa)) //retorna os valores
console.log(Object.entries(pessoa)) //retorna chaves e valores

Object.entries(pessoa).forEach(([chave, valor]) => { //aqui retorna os valores utilizando o destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { //cria definições para a propriedade
    enumerable: true, //poderá ser numerada?
    writable: false, //poderá ser modificada?
    value: '01/01/2019' 
})// funciona mais ou menos como o freeze

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // lista a chave do objeto, se o valor de enumerable for false, não listará

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena todos os objetos listados

Object.freeze(obj) //freeze não deixa o valor do objeto ser modificado
obj.c = 1234
console.log(obj)