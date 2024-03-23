//TODO ADD ROUNDINGS 8 DECIMALS

//DOM Element Variables
const calcDisplayField = document.querySelector("#calcDisplay"); 
const btnDecimal = document.querySelector('#btn-decimal');
const btnReset = document.querySelector('#btn-reset');
const btnAdd = document.querySelector('#btn-add');
const btnSubtract = document.querySelector('#btn-subtract');
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');
const btnPercentage = document.querySelector('#btn-percentage');
const btnEqual = document.getElementById('btn-equal');
const btnDelete = document.querySelector('#btn-delete');
const btnSigns = document.querySelector('#btn-signs')
const buttons = []; for (i = 0; i <= 9; i++) {buttons[i] = document.querySelector('#btn'+i);};

// Variables
let variables = [], operator = '', runningTotal = 0; 
let stepBy = 0;
let lastVariables = [], lastOperator = '', lastTotal = 0, lastInput = '', lastCommand = '';
calcDisplayField.value = 0;

//Operator Functions
function operate(operator, a, b) {
    let value = 0;
    if (operator === '+') { return value = add(a, b)}
    else if (operator === '-') {return value = subtract(a, b)}
    else if (operator === '*') {return value = multiply(a, b)}
    else {return value = divide(a, b)};
};
function add(a, b) {return Number(a) + Number(b);};
function subtract(a, b) {return Number(a) - Number(b);};
function multiply(a, b) {return Number(a) * Number(b);};
function divide(a, b) {
    if (b === '0') {return 'Err...'}
    else {return Number(a) / Number(b);}; 
};

function takeSnapshot() {lastTotal = runningTotal; lastVariables = variables; lastOperator = operator;};

function percentage() {calcDisplayField.value /= 100;};

function backSpace() {
    const lastDigitDeleted = calcDisplayField.value.slice(0, -1);
    calcDisplayField.value = lastDigitDeleted;
};

function addRemoveDecimal() {
    if ((lastInput === '' || lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '=' )) {
        calcDisplayField.value = '0.';
    }
    else if (calcDisplayField.value.search(/[.]/) === -1) {
        calcDisplayField.value += '.'; 
    }
    lastInput = '.';
};

function reset() {
    runningTotal = 0; 
    lastTotal = 0;
    variables = [];
    lastVariables = [];
    operator = '';
    lastOperator = '';
    lastInput = '';
    lastCommand = '';
    stepBy = 0;
    calcDisplayField.value = 0;
};

function enterNumber(num) {
    if ((lastInput === '' || lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '=' ) && calcDisplayField.value !== '-') {
        calcDisplayField.value = num;
    }
    else {
        if (calcDisplayField.value.length < 10 || calcDisplayField.value === '-') {
            if (calcDisplayField.value !== '0' && num !== '0') {
                calcDisplayField.value += num; 
            }
        }
    }
    lastInput = 'number';
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        enterNumber(i);
    })
};

function addButton() {
    if (variables.length === 0) {
        variables.push(calcDisplayField.value);
        operator = '+';
    }
    else if (variables.length === 1) {
        variables.push(calcDisplayField.value);
        if (lastOperator !== '+') {
            operator = lastOperator;
        }    
        else {
            operator = '+';
        }
        takeSnapshot();
        runningTotal += operate(operator, variables[0], variables[1]);
        operator = '+';
        calcDisplayField.value = runningTotal;
        }
    else if (variables.length === 2) {
            variables[0] = runningTotal;
            variables[1] = calcDisplayField.value;
            if (lastOperator !== '+') {
                operator = lastOperator;
            }    
            else {
                operator = '+';
            }
            takeSnapshot();
            runningTotal = operate(operator, variables[0], variables[1]);
            operator = '+';
            calcDisplayField.value = runningTotal;
        }
    lastOperator = operator;
    lastCommand = operator;
    lastInput = operator;
};

function subtractButton() {
    if (variables.length === 0) {
        variables.push(calcDisplayField.value);
        operator = '-';
    }
    else if (variables.length === 1) {
        variables.push(calcDisplayField.value);
        if (lastOperator !== '-') {
            operator = lastOperator;
        }    
        else {
            operator = '-';
        }
        takeSnapshot();
        runningTotal += operate(operator, variables[0], variables[1]);
        operator = '-';
        calcDisplayField.value = runningTotal;
        }
    else if (variables.length === 2) {
            variables[0] = runningTotal;
            variables[1] = calcDisplayField.value;
            if (lastOperator !== '-') {
                operator = lastOperator;
            }    
            else {
                operator = '-';
            }
            takeSnapshot();
            runningTotal = operate(operator, variables[0], variables[1]);
            operator = '-';
            calcDisplayField.value = runningTotal;
        }
    lastOperator = operator;
    lastCommand = operator;
    lastInput = operator;
};

function multiplyButton() {
    if (variables.length === 0) {
        variables.push(calcDisplayField.value);
        operator = '*';
    }
    else if (variables.length === 1) {
        variables.push(calcDisplayField.value);
        //if the last operator isn't the same as + then it should sum up the values using prev operator
        //before setting + as the current operator
        if (lastOperator !== '*') {
            operator = lastOperator;
        }    
        else {
            operator = '*';
        }
        takeSnapshot();
        runningTotal += operate(operator, variables[0], variables[1]);
        operator = '*';
        calcDisplayField.value = runningTotal;
        }
    else if (variables.length === 2) {
            variables[0] = runningTotal;
            variables[1] = calcDisplayField.value;
            if (lastOperator !== '*') {
                operator = lastOperator;
            }    
            else {
                operator = '*';
            }
            takeSnapshot();
            runningTotal = operate(operator, variables[0], variables[1]);
            operator = '*';
            calcDisplayField.value = runningTotal;
        }
    lastOperator = operator;
    lastCommand = operator;
    lastInput = operator;
};

function divideButton() {
    if (variables.length === 0) {
        variables.push(calcDisplayField.value);
        operator = '/';
    }
    else if (variables.length === 1) {
        variables.push(calcDisplayField.value);
        //if the last operator isn't the same as + then it should sum up the values using prev operator
        //before setting + as the current operator
        if (lastOperator !== '/') {
            operator = lastOperator;
        }    
        else {
            operator = '/';
        }
        takeSnapshot();
        runningTotal += operate(operator, variables[0], variables[1]);
        operator = '/';
        calcDisplayField.value = runningTotal;
        }
    else if (variables.length === 2) {
            variables[0] = runningTotal;
            variables[1] = calcDisplayField.value;
            if (lastOperator !== '/') {
                operator = lastOperator;
            }    
            else {
                operator = '/';
            }
            takeSnapshot();
            runningTotal = operate(operator, variables[0], variables[1]);
            operator = '/';
            calcDisplayField.value = runningTotal;
        }
    lastOperator = operator;
    lastCommand = operator;
    lastInput = operator;
};

function equalButton() {
    if (variables.length === 1) { 
        if (lastInput === 'number') {
            variables.push(calcDisplayField.value); 
        }
        else { //this is so 2+= is 4.... this to make this work with chaining operation
            if (lastVariables.length === 0) { 
                variables[1] = variables[0];
                stepBy = variables[1];
            }
            else {
                variables[1] = 0;
                stepBy = variables[0];
            }
        }
        takeSnapshot();
        runningTotal = operate(operator, variables[0], variables[1]);
        //manipulate stepBy to decrement if the last operation was minus
        if (lastOperator === '-') {
            stepBy = variables[1] * -1;
        }
        else {
            stepBy = variables[1];
        }
        lastCommand = '=';
    }
    else if (lastCommand === '=' && lastOperator !== '') { 
        operator = lastOperator;        
        variables[0] = stepBy;
    
        if (lastOperator === '+') {
            variables[1] = 0;
            takeSnapshot();
            runningTotal += operate(operator, variables[0], variables[1]);
        }
        else if (lastOperator === '-') {
            variables[1] *= -1;
            variables[1] = 0;
            takeSnapshot();
            runningTotal += operate(operator, variables[0], variables[1]);
        }
        if (lastOperator === '*') {
            variables[1] = 1;
            takeSnapshot();
            runningTotal *= operate(operator, variables[0], variables[1]);
        }
        if (lastOperator === '/') {
            variables[1] = 1;
            takeSnapshot();
            runningTotal /= operate(operator, variables[0], variables[1]);
        }
    }
    else if (variables.length === 2) {
        variables[0] = runningTotal;
        variables[1] = calcDisplayField.value;
        takeSnapshot();
        runningTotal = operate(operator, variables[0], variables[1]);
        if (lastOperator === '-') {
            stepBy = Number(lastVariables[1]) * -1;
        }
        else {
            stepBy = Number(lastVariables[1])
        }
        lastCommand = '=';
    }
    if (operator !== '') {
        calcDisplayField.value = runningTotal;
    }
    variables = [];
    operator = '';
    lastInput = '=';
    lastCommand = '=';
};

//SIGN BUTTON - Event Listener
btnSigns.addEventListener('click', function() {
    if (calcDisplayField.value === '0') {calcDisplayField.value = '-';}
    else if (calcDisplayField.value === '-') {calcDisplayField.value = '0';}
    else if (calcDisplayField.value[0] !== '-' && calcDisplayField.value !== '0') {
        removeNegative = calcDisplayField.value.slice(0,0) + '-' +calcDisplayField.value;
        calcDisplayField.value = removeNegative;
        runningTotal = Number(calcDisplayField.value);
    }
    else {
        calcDisplayField.value = calcDisplayField.value.slice(1);
        runningTotal = Number(calcDisplayField.value);
    }
});

//OPERATION BUTTON CLICKS
btnPercentage.addEventListener('click', function() {percentage()});
btnDecimal.addEventListener('click', function() {addRemoveDecimal()});
btnDelete.addEventListener('click', function() {backSpace()});
btnReset.addEventListener('click', function() {reset();});
btnAdd.addEventListener('click', function(){addButton()});
btnSubtract.addEventListener('click', function() {subtractButton()});
btnMultiply.addEventListener('click', function(){multiplyButton()});
btnDivide.addEventListener('click', function(){divideButton()});
btnEqual.addEventListener('click', function() {equalButton()});

//KEYBOARD INPUTS
document.addEventListener('keydown', function(e) {
    if (e.key === '0') { enterNumber(0) }
    else if (e.key === '1') { enterNumber(1) }
    else if (e.key === '2') { enterNumber(2) }
    else if (e.key === '3') { enterNumber(3) }
    else if (e.key === '4') { enterNumber(4) }
    else if (e.key === '5') { enterNumber(5) }
    else if (e.key === '6') { enterNumber(6) }
    else if (e.key === '7') { enterNumber(7) }
    else if (e.key === '8') { enterNumber(8) }
    else if (e.key === '9') { enterNumber(9) }
    else if (e.key === 'c') { reset() }
    else if (e.key === '%') { percentage() }
    else if (e.key === 'Backspace') { backSpace() }
    else if (e.key === '/') { divideButton() }
    else if (e.key === '*') { multiplyButton(9) }
    else if (e.key === '-') { subtractButton(9) }
    else if (e.key === '+') { addButton(9) }
    else if (e.key === '=' || e.key === 'Enter') { equalButton() }
    else if (e.key === '.') { addRemoveDecimal(9) }
});