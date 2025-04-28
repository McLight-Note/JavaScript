const numInput = document.getElementById("myInput")
const myButton = document.getElementById("myButton") 
const myLabel = document.getElementById("myLabel") 

myButton.onclick = function(){
const number = Number(numInput.value);

if(number % 2 == 0){
    myLabel.textContent= `${number} soni juft sondir`;
}
else{
    myLabel.textContent= `${number} soni toq sondir`;
}
}