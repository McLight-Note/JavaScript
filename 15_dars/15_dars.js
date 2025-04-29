const fullName = "Shukirillayev Mukhammadsodik";

/*
let firstName = fullName.slice(0, 13);
let lastName = fullName.slice(14);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar)
console.log(lastChar)
console.log(firstName);
console.log(lastName);
*/

/*
let firstName = fullName.slice(0, fullName.indexOf(' '));
let lastName = fullName.slice(fullName.indexOf(' ') + 1);

console.log(firstName);
console.log(lastName);
*/

const email = 'birnimadir@gmail.com'

let username = email.slice(0, email.indexOf('@'));
let extention = email.slice(email.indexOf('@'));

console.log(username);
console.log(extention);