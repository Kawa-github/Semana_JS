const numbers = [1,2,3]

const somaNumbers = numbers.reduce((acumulador, atual) => acumulador + atual , 0)

console.log('Array sem reduce: ', numbers)
console.log('Array COM reduce:', somaNumbers)