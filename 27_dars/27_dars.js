let numbers = [1,2,3,4,5,6];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers)

console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = 'McLight Muhammad';
let letters = [...username];
console.log(letters);

letters = letters.join('-');
console.log(letters);

let fruits = ['apple', 'banana', 'orange'];
let vegetables = ['salad', 'potatoes', 'tomato']
let foods = [...fruits, ...vegetables, 'eggs', 'milk'];

console.log(fruits);
console.log(vegetables);
console.log(foods);