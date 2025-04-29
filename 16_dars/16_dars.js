

let userName = window.prompt('Enter your username: ');

// -- No Method Chaining --

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();

userName = letter + extraChars;

console.log(userName)

// -- Method Chaining --

userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLocaleLowerCase();

console.log = userName