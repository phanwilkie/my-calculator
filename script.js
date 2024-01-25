//Button Variables - can simplify this
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

function enterNumber(num) {
    //do not allow adding of additional 0 if 0 is the only number
    if ((lastInput === '' || lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '=' ) && calcDisplayField.value !== '-') {
        calcDisplayField.value = num;
    }
    else {
        if (calcDisplayField.value.length < 10 || calcDisplayField.value === '-') {
            calcDisplayField.value += num; 
        }
    }
    lastInput = 'number';
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        enterNumber(i);
    })
};

document.addEventListener('keydown', function(e) {
        if (e.key === '0') { enterNumber(0) };
        if (e.key === '1') { enterNumber(1) };
        if (e.key === '2') { enterNumber(2) };
        if (e.key === '3') { enterNumber(3) };
        if (e.key === '4') { enterNumber(4) };
        if (e.key === '5') { enterNumber(5) };
        if (e.key === '6') { enterNumber(6) };
        if (e.key === '7') { enterNumber(7) };
        if (e.key === '8') { enterNumber(8) };
        if (e.key === '9') { enterNumber(9) };
        // if (e.key === '9') { enterNumber(9) };
        // if (e.key === '9') { enterNumber(9) };
        // if (e.key === '9') { enterNumber(9) };
        // if (e.key === '9') { enterNumber(9) };
        // if (e.key === '9') { enterNumber(9) };
        // if (e.key === '9') { enterNumber(9) };

});

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

//PERCENTAGE BUTTON
btnPercentage.addEventListener('click', function() {calcDisplayField.value /= 100;});

//DECIMAL BUTTON - Event Listener (keystroke to be added)
btnDecimal.addEventListener('click', function() {
    if ((lastInput === '' || lastInput === '+' || lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '=' )) {
        calcDisplayField.value = '0.';
    }
    else if (calcDisplayField.value.search(/[.]/) === -1) {
        calcDisplayField.value += '.'; 
    }
    lastInput = '.';
});

//BACKSPACE BUTTON -  Event Listener (keystroke to be added))
btnDelete.addEventListener('click', function() {
    const lastDigitDeleted = calcDisplayField.value.slice(0, -1);
    calcDisplayField.value = lastDigitDeleted;
});

//RESET BUTTON -  Event Listener
btnReset.addEventListener('click', function() {
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
});

//ADD BUTTON - Event Listener (keystroke to be added)
btnAdd.addEventListener('click', function(){
    console.log('ADD operation')
    if (variables.length === 0) {
        console.log('ADD scenario 1')
        variables.push(calcDisplayField.value);
        operator = '+';
    }
    else if (variables.length === 1) {
        console.log('ADD scenario 2 - var.length === 1')
        variables.push(calcDisplayField.value);
        //if the last operator isn't the same as + then it should sum up the values using prev operator
        //before setting + as the current operator
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
            console.log('ADD scenario 3 - var.length === 2')
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
    console.log('var: ' + variables+ ' | operator: ' +operator+ ' | lastCommand: ' +lastCommand+ ' | lastInput: ' +lastInput);
    console.log('last var: ' + lastVariables+ ' | last operator: ' +lastOperator);
});

//SUBTRACT BUTTON - Event Listener (keystroke to be added)
btnSubtract.addEventListener('click', function() {
    console.log('SUB operation')
    if (variables.length === 0) {
        console.log('SUB scenario 1')
        variables.push(calcDisplayField.value);
        operator = '-';
    }
    else if (variables.length === 1) {
        console.log('SUB scenario 2 - var.length === 1')
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
            console.log('SUB scenario 3 - var.length === 2')
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
    console.log('var: ' + variables+ ' | operator: ' +operator+ ' | lastCommand: ' +lastCommand+ ' | lastInput: ' +lastInput);
    console.log('last var: ' + lastVariables+ ' | last operator: ' +lastOperator);
});

//MULTIPLY BUTTON - Event Listener (keystroke to be added)
btnMultiply.addEventListener('click', function(){
    console.log('MULTIPLY operation')
    if (variables.length === 0) {
        console.log('MULTIPLY scenario 1')
        variables.push(calcDisplayField.value);
        operator = '*';
    }
    else if (variables.length === 1) {
        console.log('MULTIPLY scenario 2 - var.length === 1')
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
            console.log('MULTIPLY scenario 3 - var.length === 2')
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
    console.log('var: ' + variables+ ' | operator: ' +operator+ ' | lastCommand: ' +lastCommand+ ' | lastInput: ' +lastInput);
    console.log('last var: ' + lastVariables+ ' | last operator: ' +lastOperator);
});

//DIVIDE BUTTON - Event Listener (keystroke to be added)
btnDivide.addEventListener('click', function(){
    console.log('DIVIDE operation')
    if (variables.length === 0) {
        console.log('DIVIDE scenario 1')
        variables.push(calcDisplayField.value);
        operator = '/';
    }
    else if (variables.length === 1) {
        console.log('DIVIDE scenario 2 - var.length === 1')
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
            console.log('DIVIDE scenario 3 - var.length === 2')
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
    console.log('var: ' + variables+ ' | operator: ' +operator+ ' | lastCommand: ' +lastCommand+ ' | lastInput: ' +lastInput);
    console.log('last var: ' + lastVariables+ ' | last operator: ' +lastOperator);
});

//EQUAL BUTTON
btnEqual.addEventListener('click', function() {
    if (variables.length === 1) { 
        console.log('equal case 1')
        if (lastInput === 'number') {
            console.log('equal case 1A')
            variables.push(calcDisplayField.value); 
        }
        else { //this is so 2+= is 4.... this to make this work with chaining operation
            if (lastVariables.length === 0) { 
                console.log('equal case 1B-A')
                variables[1] = variables[0];
                stepBy = variables[1];
            }
            else {
                console.log('equal case 1B-B')
                variables[1] = 0; //come back for multiply and divide
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
    //chaining increment to work e.g. 2+2+= should equal to
    //pressing multiple '=' in a row should increment/decrement using last number and operator
    else if (lastCommand === '=' && lastOperator !== '') { 
        console.log('equal case 2')
        operator = lastOperator;        
        variables[0] = stepBy;
    
        if (lastOperator === '+') {
            console.log('equal case 2 +');
            variables[1] = 0;
            takeSnapshot();
            runningTotal += operate(operator, variables[0], variables[1]);
        }
        else if (lastOperator === '-') {
            console.log('equal case 2 -');
            variables[1] *= -1;
            variables[1] = 0;
            takeSnapshot();
            runningTotal += operate(operator, variables[0], variables[1]);
        }
        if (lastOperator === '*') {
            console.log('equal case 2 *');
            variables[1] = 1;
            takeSnapshot();
            runningTotal *= operate(operator, variables[0], variables[1]);
        }
        if (lastOperator === '/') {
            console.log('equal case 2 /');
            variables[1] = 1;
            takeSnapshot();
            runningTotal /= operate(operator, variables[0], variables[1]);
        }
    }
    else if (variables.length === 2) {
        console.log('Pressing = and the variable length is 2 ')
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
    console.log('var: ' + variables+ ' | operator: ' +operator+ ' | lastCommand: ' +lastCommand+ ' | lastInput: ' +lastInput);
    console.log('last var: ' + lastVariables+ ' | last operator: ' +lastOperator);
    console.log('runningTotal: ' +runningTotal+ ' | lastTotal: ' +lastTotal + '| Step By: ' + stepBy);
    variables = [];
    operator = '';
    lastInput = '=';
    lastCommand = '=';
});


//TO DO
//1. subtract - DONE
//2. be able to switch operation ( - --> + / + --> -) - DONE
//2. multiply - DONE
//3. divide and divided by 0 - DONE
//4. % and fraction - DONE
//6. Keystroke
//5. +/- switch increment/decrement direction - DONE
