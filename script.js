// random characters
let symbols =  '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';

function getRandomNumber (){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomUppercase () {
    return String.fromCharCode(Math.floor(Math.random () * 26) + 65);
};

function getRandomUppercase () {
    return String.fromCharCode(Math.floor(Math.random () * 26) + 97);
};

function getRandomSymbol () {
return symbols[Math.floor(Math.random() * symbols.length)]
};

// html elements
let PasswordArea = document.getElementById ("password");
let GenButton = document.getElementById ("generate");
let CopyButton = document.getElementById ("Copy");

// alerts and prompts
let Requirements = alert("Please select what requirements you need to Generate your secure password");

let CharLength = prompt("Select between 8 and 128 characters");

if (CharLength.length < 8 || CharLength.length >128) {
    alert("please only select between 8 and 128 characters");

}


