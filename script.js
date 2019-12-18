// random characters
let symbols =  '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';

function getRandomNumber (){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomUpperCase () {
    return String.fromCharCode(Math.floor(Math.random () * 26) + 65);
};

function getRandomLowerCase () {
    return String.fromCharCode(Math.floor(Math.random () * 26) + 97);
};

function getRandomSymbol () {
return symbols[Math.floor(Math.random() * symbols.length)]
};

// html elements
let passwordArea = document.getElementById ("password");
let genButton = document.getElementById ("generate");
let copyButton = document.getElementById ("Copy");

// alerts and prompts
let Requirements = alert("Please select what requirements you need to Generate your secure password");

let charLength = prompt("Select between 8 and 128 characters");

// need to insert a function to change charLength to number value
let length = parseInt(charLength);

if (length < 8 || length > 128) {
    alert("please only select between 8 and 128 characters");
    charLength = prompt("Select between 8 and 128 characters");


    // console.log(length);
    

}

let wantSymbols = confirm ("Do you want to use symbols?");
let wantUpper = confirm("do you want to use Upper Case Letters?");
let wantLower = confirm("do you want to use Lower Case Letters?");
let wantNumbers = confirm ("do you want to use numbers?");

// console.log([wantLower], [wantNumbers], [wantSymbols], [wantUpper]);

let randomizer = {
    lower: getRandomLowerCase, upper: getRandomUpperCase, symbol: getRandomSymbol, number: getRandomNumber};

genButton.addEventListener ('click' , function (){

    passwordArea.innerText = generatePassword (length, wantNumbers, wantUpper, wantLower, wantSymbols);

});

function generatePassword (length, number, upper, lower, symbol){

let resultPass = "";

let charTypes = [{number}, {upper}, {lower}, {symbol}];

let filterTypes = [];


// I stopped here. need to filter out false statemetns
function removeFalse ( {
    for (number, upper, lower, symbol) {
        if (charTypes[key] === false) {delete charTypes[key];}
        else {filterTypes.push[key]};
    }
})
removeFalse();
console.log (charTypes);
console.log(filterTypes);
};











