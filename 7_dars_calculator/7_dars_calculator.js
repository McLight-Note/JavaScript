const zeroBtn = document.getElementById('zeroBtn'),
    oneBtn = document.getElementById('oneBtn'),
    twoBtn = document.getElementById('twoBtn'),
    threeBtn = document.getElementById('threeBtn'),
    fourBtn = document.getElementById('fourBtn'),
    fiveBtn = document.getElementById('fiveBtn'),
    sixBtn = document.getElementById('sixBtn'),
    sevenBtn = document.getElementById('sevenBtn'),
    eightBtn = document.getElementById('eightBtn'),
    nineBtn = document.getElementById('nineBtn'),

    addBtn = document.getElementById('addBtn'),
    subtractBtn = document.getElementById('subtractBtn'),
    multiplyBtn = document.getElementById('multiplyBtn'),
    devideBtn = document.getElementById('devideBtn'),
    resetBtn = document.getElementById('resetBtn'),
    result = document.getElementById('result');

let compute = 0;
let onMind = '';

oneBtn.onclick = function(){
    onMind += '1';
    result.textContent = onMind;
}

twoBtn.onclick = function(){
    onMind += '2';
    result.textContent = onMind;
}

threeBtn.onclick = function(){
    onMind += '3';
    result.textContent = onMind;
}

fourBtn.onclick = function(){
    onMind += '4';
    result.textContent = onMind;
}

fiveBtn.onclick = function(){
    onMind += '5';
    result.textContent = onMind;
}

sixBtn.onclick = function(){
    onMind += '6';
    result.textContent = onMind;
}

sevenBtn.onclick = function(){
    onMind += '7';
    result.textContent = onMind;
}

eightBtn.onclick = function(){
    onMind += '8';
    result.textContent = onMind;
}

nineBtn.onclick = function(){
    onMind += '9';
    result.textContent = onMind;
}

zeroBtn.onclick = function(){
    onMind += '0';
    result.textContent = onMind;
}

addBtn.onclick = function(){
    compute += Number(onMind);
    result.textContent = compute;
    onMind = '';
}

subtractBtn.onclick = function(){
    compute -= Number(onMind);
    result.textContent = compute;
    onMind = '';
}

multiplyBtn.onclick = function(){
    compute *= Number(onMind);
    result.textContent = compute;
    onMind = '';
}

devideBtn.onclick = function(){
    compute /= Number(onMind);
    result.textContent = compute;
    onMind = '';
}

resetBtn.onclick = function(){
    compute = 0;
    onMind = '';
    result.textContent = compute;
}