const food1 = 'pizza';
const food2 = 'hamburger';
const food3 = 'sushi';
const food4 = 'ramen';
const food5 = 'hotdog';

function openFridge(...foods){
    console.log(foods)
}
function getFood(...foods){
    return foods;
}

openFridge(food1, food2);

const foods = getFood(food1, food2, food5);
console.log(foods);

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,2,3,4,5,6);

console.log(`Your total is ${total}`);


function getAvarage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result/numbers.length;
}

let avarageNumbersSum = getAvarage(1,2,3,4,5,5,6,2);

console.log(avarageNumbersSum);

function combineString(...strings){
    return strings.join(' ')
}

const fullName = combineString('Mr', "Spongebob", 'Squarepants', 'III');
console.log(fullName);