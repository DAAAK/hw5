const array = Array.from({ length: 10 }, (_, number) => number + 1);

const oddNumber = array.filter(number => number % 2 !== 0);
const divisibleBy2Or5 = array.filter(number => number % 2 === 0 || number % 5 === 0);
const divisibleBy3Squared = array.filter(number => number % 3 === 0).map(number => Math.pow(number, 2))
const sumOfSquareDivisibleBy5 = array.filter(number => number % 5 === 0).reduce((accumulator, number) => accumulator + number ** 2, 0);

console.log(`The odd numbers in an array going from 1 to 10 are: ${oddNumber}`)
console.log(`The numbers divisible by 2 or 5 in an array going from 1 to 10 are: ${divisibleBy2Or5}`)
console.log(`The numbers divisible by 3 squared in an array going from 1 to 10 are: ${divisibleBy3Squared}`)
console.log(`The sum of square numbers divisible by 5 in an array going from 1 to 10 is: ${sumOfSquareDivisibleBy5}`)