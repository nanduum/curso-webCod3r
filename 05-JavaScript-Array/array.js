console.log(typeof Array, typeof new Array, typeof []) //function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana') 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' 
aprovados.push('Abia') //adiciona dinamicamente um novo elemento no array
console.log(aprovados.length) //mostra quantos itens têm no array

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) //no indice 8 não terá nenhum item atribuido, retornará undefined

console.log(aprovados)
aprovados.sort() //coloca os valores do array em ordem aleatoria
console.log(aprovados)

delete aprovados[1] //deleta o elemento do array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //adiciona e apaga elementos do array, dependendo da forma que for escrito
console.log(aprovados)