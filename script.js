//Button Variables
const calcDisplayField = document.getElementById("calcDisplay");
const calcHeaderField = document.getElementById("calcHeader");
const currentOperatorField = document.getElementById("operatorField");
const btnDecimal = document.querySelector('#btn-decimal');
const btnReset = document.querySelector('#btn-reset');
const btnAdd = document.querySelector('#btn-add');
const btnDelete = document.querySelector('#btn-delete');

const button = [];
for (i = 0; i <= 9; i++) {
    button[i] = document.querySelector('#btn'+i);
};


//working variables
calcDisplayField.value = 0;
let runningTotal = 0;
let variable = 0;
let operator = '';

//Operatation Functions
function operate(operator, a, b) {
    let value = 0;
    if (operator === 'add') { return value = add(a, b)}
    else if (operator === 'subtract') {return value = subtract(a, b)}
    else if (operator === 'multiply') {return value = multiply(a, b)}
    else {return value = divide(a, b)};
};

function add(a, b) {return a + b;};
function subtract(a, b) {return a - b;};
function multiply(a, b) {return a * b;};
function divide(a, b) {return a / b;};


//Numeric Buttons - Event Listener Mouse & Keystroke
button[1].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 1;} else {calcDisplay.value += 1;}});
button[2].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 2;} else {calcDisplay.value += 2;}});
button[3].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 3;} else {calcDisplay.value += 3;}});
button[4].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 4;} else {calcDisplay.value += 4;}});
button[5].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 5;} else {calcDisplay.value += 5;}});
button[6].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 6;} else {calcDisplay.value += 6;}});
button[7].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 7;} else {calcDisplay.value += 7;}});
button[8].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 8;} else {calcDisplay.value += 8;}}); 
button[9].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 9;} else {calcDisplay.value += 9;}});    
button[0].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 0;} else {calcDisplay.value += 0;}});    


//Decimal Button - Event Listener Mouse & Keystroke
btnDecimal.addEventListener('click', function() {
    if (calcDisplay.value.search(/[.]/) === -1) {calcDisplay.value += '.'}});

//Backspace Button -  Event Listener Mouse & Keystroke
btnDelete.addEventListener('click', function() {
    const lastDigitDeleted = calcDisplay.value.slice(0, -1);
    calcDisplay.value = lastDigitDeleted;
});

//Reset Button -  Event Listener Mouse & Keystroke
btnReset.addEventListener('click', function() {runningTotal = 0; variable = 0; operator = ''; calcDisplayField.value = 0;});

//Operation Buttons - Event Listener Mouse & Keystroke
btnAdd.addEventListener('click', function() {
    operator = 'add';
    variable = Number(calcDisplayField.value);
    runningTotal = operate(operator, runningTotal, variable);
    currentOperatorField.textContent = '+';
    calcHeaderField.value = runningTotal;
    // calcDisplayField.value = 0;
});

//Equal Button - Event Listener Mouse & Keystroke
const btnEqual = document.getElementById('btn-equal');
btnEqual.addEventListener('click', function() {
    if (operator !== '') {
        console.log(operate(operator, runningTotal, variable));
    };
    
});




// // let a = 1, b = 1;
// // console.log(`Add: ${add(a, b)}, Subtract: ${subtract(a, b)}, Multiply: ${multiply(a, b)}, Divide: ${divide(a, b)}`);

// // console.log(`Add: ${calculate('add', 4, 1)}, Subtract: ${calculate('subtract', 4, 1)}, Multiply: ${calculate('multiply', 4, 1)}, Divide: ${calculate('divide', 4, 1)}`);
// console.log(`Add: ${operate('add', 12, 12)}`);
// console.log(`Subtract: ${operate('subtract', 12, 17)}`);
// console.log(`Multiply: ${operate('multiply', 12, 12)}`);
// console.log(`Divide: ${operate('divide', 12, 12)}`);

