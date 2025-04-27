/*
let age =20;

if(age >= 18){
    console.log("You are old enough to enter this site")
}
else{
    console.log("You must be 18+ to enter this site");
}

let time = 9;

if(time < 12){
    console.log('Good Morning!');
}
else{
    console.log('Good afternoon!');
}

let isStudent = false;

if(isStudent){
    console.log('You are a student');
}
else{
    console.log('You are not a student');
}

let sage = 25, hasLicence = false;

if(age >= 16){
    console.log('You are old enough to drive!');

    if(hasLicence){
        console.log('You have your licence');
    }
    else{
        console.log('You do not have your licence yet')
    }
}
else{
    console.log('You must be older');
}


if(age >= 18){
    console.log("You are old enough to enter this site")
}
else if(age == 0){
    console.log('You are just born bro')
}
else if(age < 0){
    console.log('Your age cant be below 0')
}
else if(age >= 100){
    console.log('You are too old to enter this site')
}
else{
    console.log("You must be 18+ to enter this site");
}
*/


const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    if (age >= 100){
        resultElement.textContent = "You are TOO OLD to enter this site";
    }
    else if(age == 0){
        resultElement.textContent = "You can't enter. You were just born.";
    }
    else if(age >= 18){
        resultElement.textContent = "You are old enough to enter this site";
    }
    else if(age < 0){
        resultElement.textContent = "Your age can't be below 0";
    }
    else{
        resultElement.textContent = "Your must be 18+ to enter this site";
    }
}
