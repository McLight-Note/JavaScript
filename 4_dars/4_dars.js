let username;

//username = window.prompt('What is you username?')

document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Hello ${username}`
}

console.log(username)