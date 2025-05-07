let fruit = ['apple', 'orange', 'pear'];

fruit[3] = 'coconut';

fruit.push('beacon');

console.log(fruit);
fruit.pop();

fruit.unshift('banana');

console.log(fruit);
fruit.shift()

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit);

let numOfFruits = fruit.length;
console.log(numOfFruits);

let index = fruit.indexOf('pear');
console.log(index);

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

for(let i = fruit.length - 1; i >= 0; i--){
    console.log(fruit[i]);
}

fruit.sort();

for(let x of fruit){
    console.log(x)
}


fruit.sort().reverse();

for(let x of fruit){
    console.log(x)
}