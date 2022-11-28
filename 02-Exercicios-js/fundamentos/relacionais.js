console.log('01)', '1' == 1) //esse tipo de comparação só compara os valores, true
console.log('02)', '1' === 1) //compara o tipo, string é diferente de tipo numero, false
console.log('03)', '3' != 3) //compara se o valor e o tipo de a é igual ao valor e ao tipo de b.
console.log('04)', '3' !== 3) //compara se o valor e o tipo de a é diferente do valor e do tipo de b.

// o operador "===" se lê: "estritamente igual a ..." 
// != compara o se o valor e tipo são iguais
// !== compara o valor e tipo são diferentes

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) //data de referencia do javascript é 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //true, ambos são tipo number
console.log('12)', undefined == null) //true
console.log('13)', undefined === null) //false
