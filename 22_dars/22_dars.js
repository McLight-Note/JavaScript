/*
function happyBirthday(username, age){
    console.log('Happy Birthday to you!');
    console.log('Happy Birthday to you!');
    console.log(`Happy Birthday dear ${username}!`);
    console.log('Happy Birthday to you!');
    console.log(`You are ${age} years old!`)
}

happyBirthday("McLight", 25);
happyBirthday('Spongebob', 30);
happyBirthday('Patrick', 37);
*/

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function devide(x, y){
    return x / y;
}
function isEven(x){
    
    return x % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes('@') ? true : false;
}

console.log(isValidEmail('newmclight021226@gmail.com'))