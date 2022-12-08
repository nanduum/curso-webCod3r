const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona elementos no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //é o contrario de shift, coloca um no primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //significa que no indice 2 vai add o bottas e massa, o 0 no segundo significa que não removerá ninguem
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :( // aqui remove o piloto do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice que coloquei
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //vai até o indice 4, mas não add ele
console.log(algunsPilotos2)