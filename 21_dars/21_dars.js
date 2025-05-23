const minNum = 1, maxNum = 100,
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid number`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert('Low, try again!');
        }
        else if(guess > answer){
            window.alert('High, try again!');
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}