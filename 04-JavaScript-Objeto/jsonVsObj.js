const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //transforma objetos em json

// nota que a função soma será excluida
// json é apenas textual, só carrega dados

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

//forma correta de escrever um json

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

// nota que os atributos precisam estar com aspas duplas, numeros, chaves, colchetes 
// ou booleanos não precisam de aspas duplas