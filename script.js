//Tracking Variables
let runningTotal = 0; 
let variables = []; 
let operator = ''; 
let lastOperator = '';
let lastInput = '';

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
    for (i = 0; i <= 9; i++) {button[i] = document.querySelector('#btn'+i);};

//Operator Functions
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

//NUMBERIC BUTTONS - Event Listener (keystroke to be added)
button[1].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 1; lastInput = 1;} else {calcDisplayField.value += 1; lastInput = 1;}});
button[2].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 2; lastInput = 2;} else {calcDisplayField.value += 2; lastInput = 2;}});
button[3].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 3; lastInput = 3;} else {calcDisplayField.value += 3; lastInput = 3;}});
button[4].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 4; lastInput = 4;} else {calcDisplayField.value += 4; lastInput = 4;}});
button[5].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 5; lastInput = 5;} else {calcDisplayField.value += 5; lastInput = 5;}});
button[6].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 6; lastInput = 6;} else {calcDisplayField.value += 6; lastInput = 6;}});
button[7].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 7; lastInput = 7;} else {calcDisplayField.value += 7; lastInput = 7;}});
button[8].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 8; lastInput = 8;} else {calcDisplayField.value += 8; lastInput = 8;}}); 
button[9].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 9; lastInput = 9;} else {calcDisplayField.value += 9; lastInput = 9;}});    
button[0].addEventListener('click', function() {if (calcDisplayField.value === '0') {calcDisplayField.value = 0; lastInput = 0;} else {calcDisplayField.value += 0; lastInput = 10;}});  
    
//SIGN BUTTON - Event Listener
btnSigns.addEventListener('click', function() {
    //check if there is a leading -
    lastInput = 'sign';
    if (calcDisplayField.value === '0') {calcDisplayField.value = '-';}
    else if (calcDisplayField.value === '-') {calcDisplayField.value = '0';}
    else if (calcDisplayField.value[0] !== '-' && calcDisplayField.value !== '0') {
        removeNegative = calcDisplayField.value.slice(0,0) + '-' +calcDisplayField.value;
        calcDisplayField.value = removeNegative;
    }
    else {calcDisplayField.value = calcDisplayField.value.slice(1);}
});
//DECIMAL BUTTON - Event Listener (keystroke to be added)
btnDecimal.addEventListener('click', function() {if (calcDisplayField.value.search(/[.]/) === -1) {calcDisplayField.value += '.'; lastInput = '.';}});

//BACKSPACE BUTTON -  Event Listener (keystroke to be added))
btnDelete.addEventListener('click', function() {
    const lastDigitDeleted = calcDisplayField.value.slice(0, -1);
    calcDisplayField.value = lastDigitDeleted;
});

//RESET BUTTON -  Event Listener
btnReset.addEventListener('click', function() {
    runningTotal = 0; 
    variables = [];
    operator = '';
    lastOperator = '';
    calcDisplayField.value = 0;
    calcHeaderField.value = 0;
    // console.log('var: '+variables +' : ' +operator);
    // console.log('running: ' +runningTotal);
});

//ADD OPERATION BUTTON - Event Listener (keystroke to be added)
btnAdd.addEventListener('click', function() {
    currentOperatorField.textContent = '+';
    operator = 'add';
    lastInput = 'add';
    //first operation after reset or power on
    if (variables.length === 0) {
        variables.push(Number(calcDisplayField.value));
        lastOperator = operator;
        calcDisplayField.value = 0;
        console.log('add - variables.length === 0')
        console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    } 
    else if (variables.length === 1) {
        variables.push(Number(calcDisplayField.value));
        runningTotal += operate(operator, variables[0], variables[1]);
        lastOperator = operator;
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;
        console.log('add - variables.length === 1')
        console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    }
    //if there's last operator of the same type
    else if (operator === lastOperator) {
        variables[0] = Number(calcDisplayField.value);
        variables[1] = 0;
        runningTotal += operate(operator, variables[0], variables[1]);
        lastOperator = operator;
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;
        console.log('add - operator === lastOperator')
        console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    }
    //if there's last operator of different type; compute with previous operator to clear things off
    //had to make special rule switching from - to +, otherwise it will clear off by addition rather than subtraction
    //which should be the inverse 
    else if (operator !== lastOperator && variables.length > 1) {

        //this won't work for switching from multiply to divide
        if (lastOperator === 'subtract') {
            variables[0] = Number(calcDisplayField.value) * -1;
        }
        else {variables[0] = Number(calcDisplayField.value)};
        variables[1] = 0;
        console.log('add - operator !== lastOperator')
        console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
        runningTotal += operate(lastOperator, variables[0], variables[1]);
        lastOperator = operator;
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;
        variables.shift();
        console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    }
});

btnSubtract.addEventListener('click', function() {
    currentOperatorField.textContent = '-';
    operator = 'subtract';
    lastInput = 'subtract';
    //first operation after reset or power on
    if (variables.length === 0) {
        variables.push(Number(calcDisplayField.value));
        lastOperator = operator;
        calcDisplayField.value = 0;
        console.log('sub - variables.length === 0')
        console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    } 
    else if (variables.length === 1) {
        variables.push(Number(calcDisplayField.value));
        runningTotal += operate(operator, variables[0], variables[1]);
        lastOperator = operator;
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;
        console.log('sub - variables.length === 1')
        console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    }
    //if there's last operator of the same type
    else if (operator === lastOperator) {
        console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
        variables[0] = Number(calcDisplayField.value) * -1;
        variables[1] = 0;
        runningTotal += operate(operator, variables[0], variables[1]);
        lastOperator = operator;
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;
        console.log('sub - operator === lastOperator')
        console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    }
    //if there's last operator of different type; compute with previous operator to clear things off
    //for example, the last operand was subtract
    else if (operator !== lastOperator && variables.length > 1) {
        variables[0] = Number(calcDisplayField.value);
        variables[1] = 0;
        runningTotal += operate(lastOperator, variables[0], variables[1]);
        lastOperator = operator;
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;
        variables.shift();
        console.log('sub - operator !== lastOperator')
        console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    }
});

//Equal Button - Event Listener Mouse & Keystroke
const btnEqual = document.getElementById('btn-equal');
btnEqual.addEventListener('click', function() {
    
    //test case 1 - if last input wasn't equal - pass
    if (lastInput !== 'equal' && variables.length === 1) {
        variables.push(Number(calcDisplayField.value));
        runningTotal += operate(operator, variables[0], variables[1]);
        lastInput = 'equal';
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;        
        
    }
    else if (lastInput !== 'equal' && variables.length === 2) {
        variables.shift();
        variables.push(Number(calcDisplayField.value));
        runningTotal += operate(operator, variables[0], variables[1]);
        lastInput = 'equal';
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;        
    }
    else if (lastInput == 'equal'){
        //if a number is pressed after subsequent equal then start from number and increment by total
        runningTotal += operate(operator, 0, variables[1]);
        lastInput = 'equal';
        calcHeaderField.value = runningTotal;
        calcDisplayField.value = 0;        
    }
});  