//Working variables
let runningTotal = 0;
let variables = [];
let operator = '';

//Button Variables
const calcDisplayField = document.getElementById("calcDisplay"); calcDisplayField.value = 0;
const calcHeaderField = document.getElementById("calcHeader"); calcHeaderField.value = 0;
const currentOperatorField = document.getElementById("operatorField");
const btnDecimal = document.querySelector('#btn-decimal');
const btnReset = document.querySelector('#btn-reset');
const btnAdd = document.querySelector('#btn-add');
const btnSubtract = document.querySelector('#btn-subtract');
const btnDelete = document.querySelector('#btn-delete');

const btnSigns = document.querySelector('#btn-signs')

const button = [];
for (i = 0; i <= 9; i++) {
    button[i] = document.querySelector('#btn'+i);
};

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
    if (calcDisplayField.value === '0') {calcDisplayField.value = 1;} else {calcDisplayField.value += 1;}});
button[2].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 2;} else {calcDisplayField.value += 2;}});
button[3].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 3;} else {calcDisplayField.value += 3;}});
button[4].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 4;} else {calcDisplayField.value += 4;}});
button[5].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 5;} else {calcDisplayField.value += 5;}});
button[6].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 6;} else {calcDisplayField.value += 6;}});
button[7].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 7;} else {calcDisplayField.value += 7;}});
button[8].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 8;} else {calcDisplayField.value += 8;}}); 
button[9].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 9;} else {calcDisplayField.value += 9;}});    
button[0].addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = 0;} else {calcDisplayField.value += 0;}});  
    
//+ / - button
btnSigns.addEventListener('click', function() {
    //check if there is a leading -
    if (calcDisplayField.value === '0') {calcDisplayField.value = '-';}
    else if (calcDisplayField.value === '-') {calcDisplayField.value = '0';}
    else if (calcDisplayField.value[0] !== '-' && calcDisplayField.value !== '0') {
        removeNegative = calcDisplayField.value.slice(0,0) + '-' +calcDisplayField.value;
        calcDisplayField.value = removeNegative;
    }
    else {calcDisplayField.value = calcDisplayField.value.slice(1);}
});

//Decimal Button - Event Listener Mouse & Keystroke
btnDecimal.addEventListener('click', function() {
    if (calcDisplayField.value.search(/[.]/) === -1) {calcDisplayField.value += '.'}});

//Backspace Button -  Event Listener Mouse & Keystroke
btnDelete.addEventListener('click', function() {
    const lastDigitDeleted = calcDisplayField.value.slice(0, -1);
    calcDisplayField.value = lastDigitDeleted;
});

//Reset Button -  Event Listener Mouse & Keystroke
btnReset.addEventListener('click', function() {
    runningTotal = 0; 
    variables = [];
    operator = '';
    calcDisplayField.value = 0;
    calcHeaderField.value = '';
    console.log('var: '+variables +' : ' +operator);
    console.log('running: ' +runningTotal);
});

//Operation Buttons - Event Listener Mouse & Keystroke
btnAdd.addEventListener('click', function() {
    currentOperatorField.textContent = '+';
    operator = 'add';
    //Evaluate array length to enable adding to runningTotal without needing to press '=' button
    if (variables.length === 0) {
        variables.push(Number(calcDisplayField.value));
    }
    else if (variables.length === 1) {
        variables.push(Number(calcDisplayField.value));
        runningTotal += operate(operator, variables[0], variables[1]);
    }
    else {
        console.log('BEFORE array: ' +variables + ' : ' +operator); //
        console.log('BEFORE running total: ' +runningTotal); //
        variables[0] = Number(calcDisplayField.value);
        variables[1] = 0;
        console.log('AFTER array: ' +variables); //
        runningTotal += operate(operator, variables[0], variables[1]);
        console.log('AFTER running total: '+runningTotal); //
    };
    calcHeaderField.value = runningTotal;
    calcDisplayField.value = 0;
});

btnSubtract.addEventListener('click', function() {
    currentOperatorField.textContent = '-';
    operator = 'subtract';
    //Evaluate array length to enable adding to runningTotal without needing to press '=' button
    if (variables.length === 0) {
        console.log('LENGTH === 0'); //
        console.log('BEFORE running total: ' +runningTotal); //
        console.log('BEFORE array: ' +variables + ' : ' +operator); //
        variables[0] = calcDisplayField.value;
        // variables.push(Number(calcDisplayField.value));
        console.log('AFTER array: ' +variables); //
        console.log('AFTER running total: '+runningTotal); //

    }
    else if (variables.length === 1) {
        console.log('LENGTH === 1'); //
        console.log('BEFORE running total: ' +runningTotal); //
        console.log('BEFORE array: ' +variables + ' : ' +operator); //
        variables.push(Number(calcDisplayField.value));
        console.log('AFTER array: ' +variables); //
        runningTotal += operate(operator, variables[0], variables[1]);
        console.log('AFTER running total: '+runningTotal); //

    }
    else {
        console.log('LENGTH === 2'); //
        console.log('BEFORE running total: ' +runningTotal); //
        console.log('BEFORE array: ' +variables + ' : ' +operator); //
        variables[0] = Number(calcDisplayField.value) * -1;
        variables[1] = 0;
        console.log('AFTER array: ' +variables); //
        runningTotal += operate(operator, variables[0], variables[1]);
        console.log('AFTER running total: '+runningTotal); //
    };
    calcHeaderField.value = runningTotal;
    calcDisplayField.value = 0;
});

//Equal Button - Event Listener Mouse & Keystroke
const btnEqual = document.getElementById('btn-equal');
btnEqual.addEventListener('click', function() {

if (calcDisplayField.value.length === 1) {
    console.log('SC1 - ARRAY LENGTH = 1'); //
    console.log('BEFORE running total: ' +runningTotal); //
    console.log('BEFORE array: ' +variables + ' : ' +operator); //
    console.log('AFTER array: ' +variables); //
    // runningTotal += operate(operator, variables[0], variables[1]);
    console.log('AFTER running total: '+runningTotal); //
    // calcDisplayField.value = 0;
 }
 if (calcDisplayField.value.length === 2) {
    console.log('SC2 - ARRAY LENGTH FULL'); //
    console.log('BEFORE running total: ' +runningTotal); //
    console.log('BEFORE array: ' +variables + ' : ' +operator); //
    // variables.shift();
    // variables[1] = 0;
    console.log('AFTER array: ' +variables); //
    runningTotal += operate(operator, variables[0], variables[1]);
    console.log('AFTER running total: '+runningTotal); //
    calcDisplayField.value = 0;
 }

 calcHeaderField.value = runningTotal;
//  calcDisplayField.value = 0;
});
    // variable2 = Number(calcDisplayField.value);
    // calcHeaderField.value = operate(operator, variable1, variable2);
    // runningTotal += Number(calcHeaderField.value);
    // variable1 = runningTotal;
    // calcDisplayField.value = 0;

    // console.log('var1: ' +variable1);
    // console.log('operator: ' +operator);
    // console.log('var2: ' +variable2);
    // console.log('running: ' +runningTotal);
    // console.log('----');

    //pressing on subsequent will repeat previous operation using the previous number
    //for example, 100-5 = 95 = 90 = 85 = 80 ... and so forth.





