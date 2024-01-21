//Button Variables
const calcDisplayField = document.getElementById("calcDisplay"); 
const calcHeaderField = document.getElementById("calcHeader"); 
const currentOperatorField = document.getElementById("operatorField");
const btnDecimal = document.querySelector('#btn-decimal');
const btnReset = document.querySelector('#btn-reset');
const btnAdd = document.querySelector('#btn-add');
const btnSubtract = document.querySelector('#btn-subtract');
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');
const btnPercentage = document.querySelector('#btn-percentage');
const btnDelete = document.querySelector('#btn-delete');
const btnSigns = document.querySelector('#btn-signs')
const button = []; 
for (i = 0; i <= 9; i++) {button[i] = document.querySelector('#btn'+i);};

//Tracking Variables
let lastVariables = [], lastOperator = '', lastRunningtotal = 0, lastInput = '', firstEqual = false;
let variables = [], operator = '', runningTotal = 0; 
calcHeaderField.value = 0;
calcDisplayField.value = 0;

//Operator Functions
function operate(operator, a, b) {
    let value = 0;
    if (operator === 'add') { return value = add(Number(a), Number(b))}
    else if (operator === 'subtract') {return value = subtract(Number(a), Number(b))}
    else if (operator === 'multiply') {return value = multiply(Number(a), (Number(b))}
    else {return value = divide(Number(a), Number(b))};
    //need to add logic for divided by 0
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
    lastInput = 'backspace';
});

//RESET BUTTON -  Event Listener
btnReset.addEventListener('click', function() {
    lastVariables = []; lastOperator = ''; lastRunningtotal = 0; lastInput = ''; firstEqual = false;
    variables = []; operator = ''; runningTotal = 0; 
    calcHeaderField.value = 0;
    calcDisplayField.value = 0;
});

//ADD OPERATION BUTTON - Event Listener (keystroke to be added)
btnAdd.addEventListener('click', function() {
    currentOperatorField.textContent = '+';
    operator = 'add';
    
    if (variables.length === 0) {
            console.log('---------------------');
            console.log('PLUS -- LENGTH 0');
            console.log('BEFORE: Current Variables: ' + variables + '...Oper: ' +operator +'...Running: ' +runningTotal);
            console.log('BEFORE: Last Variables: ' + lastVariables + '...Oper: ' +lastOperator +'...Running: ' +lastRunningtotal+ '...lastInput: ' + lastInput + '...firstEqual: ' + firstEqual);
        variables.push(calcDisplayField.value)
            console.log('BEFORE: Current Variables: ' + variables + '...Oper: ' +operator +'...Running: ' +runningTotal);
            console.log('BEFORE: Last Variables: ' + lastVariables + '...Oper: ' +lastOperator +'...Running: ' +lastRunningtotal+ '...lastInput: ' + lastInput + '...firstEqual: ' + firstEqual);
        

    }

    
});



// btnAdd.addEventListener('click', function() {
//     currentOperatorField.textContent = '+';
//     operator = 'add';
//     // lastInput = 'add';
//     //first operation after reset or power on
//     if (variables.length === 0) {
//         variables.push(Number(calcDisplayField.value));
//         lastOperator = operator;
//         calcDisplayField.value = 0;
//         console.log('add - variables.length === 0')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     } 
//     else if (operator === lastOperator && variables.length === 1) {
//         variables.push(Number(calcDisplayField.value));
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         console.log('add - operator === lastOperator && length === 1')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     //if there's last operator of the same type
//     else if (operator === lastOperator && variables.length === 2) {
//         variables[0] = Number(calcDisplayField.value);
//         variables[1] = 0;
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         console.log('add - operator === lastOperator && length === 2')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     //if there's last operator of different type; compute with previous operator to clear things off
//     //had to make special rule switching from - to +, otherwise it will clear off by addition rather than subtraction
//     //which should be the inverse 
//     else if (operator !== lastOperator && variables.length === 1) {

//         //this won't work for switching from multiply to divide
//         if (lastOperator === 'subtract') {
//             variables[1] = Number(calcDisplayField.value) * -1;
//         }
//         else {variables[1] = Number(calcDisplayField.value)};
//         // variables[1] = 0;
//         console.log('add - operator !== lastOperator and length ===1')
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         runningTotal += operate(lastOperator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         variables.shift();
//         console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     else if (operator !== lastOperator && variables.length === 2) {
//         //this won't work for switching from multiply to divide
//         if (lastOperator === 'subtract') {
//             variables[0] = Number(calcDisplayField.value) * -1;
//         }
//         else {variables[0] = Number(calcDisplayField.value)};
//         variables[1] = 0;
//         console.log('add - operator !== lastOperator and length ===2')
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         runningTotal += operate(lastOperator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         variables.shift();
//         console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
// });

// btnSubtract.addEventListener('click', function() {
//     currentOperatorField.textContent = '-';
//     operator = 'subtract';
//     // lastInput = 'subtract';
//     //first operation after reset or power on
//     if (variables.length === 0) {
//         variables.push(Number(calcDisplayField.value));
//         lastOperator = operator;
//         calcDisplayField.value = 0;
//         console.log('sub - variables.length === 0')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     } 
//     else if (operator === lastOperator && variables.length === 1) {
//         variables.push(Number(calcDisplayField.value));
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         console.log('sub - operator === lastOperator && variables.length === 1')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     //if there's last operator of the same type
//     else if (operator === lastOperator && variables.length === 2) {
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         variables[0] = Number(calcDisplayField.value) * -1;
//         variables[1] = 0;
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         console.log('sub - operator === lastOperator && variables.length === 2')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     //if there's last operator of different type; compute with previous operator to clear things off
//     //for example, the last operand was subtract
//     else if (operator !== lastOperator && variables.length === 1) {
//         variables[1] = Number(calcDisplayField.value); //this is the issue
//         // variables[1] = 0;
//         runningTotal += operate(lastOperator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         variables.shift();
//         console.log('sub - operator !== lastOperator && variables.length === 1')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     //need var length greater >1?
//     else if (operator !== lastOperator && variables.length === 2) {
//         variables[0] = Number(calcDisplayField.value); //this is the issue
//         variables[1] = 0;
//         runningTotal += operate(lastOperator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         variables.shift();
//         console.log('sub - operator !== lastOperator && variables.length === 2')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
// });

// //MULTIPLY OPERATION BUTTON - Event Listener (keystroke to be added)
// btnMultiply.addEventListener('click', function() {
//     currentOperatorField.textContent = 'x';
//     operator = 'multiply';
//     //first operation after reset or power on
//     if (variables.length === 0) {
//         variables.push(Number(calcDisplayField.value));
//         lastOperator = operator;
//         calcDisplayField.value = 0;
//         console.log('multiply - variables.length === 0')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     } 
//     else if (operator === lastOperator && variables.length === 1) {
//         variables.push(Number(calcDisplayField.value));
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         console.log('multiply - operator === lastOperator && length === 1')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     //if there's last operator of the same type
//     else if (operator === lastOperator && variables.length === 2) {
//         variables[0] = Number(calcDisplayField.value);
//         variables[1] = 0;
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         console.log('multiply - operator === lastOperator && length === 2')
//         console.log('var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     //if there's last operator of different type; compute with previous operator to clear things off
//     //had to make special rule switching from - to +, otherwise it will clear off by addition rather than subtraction
//     //which should be the inverse 
//     else if (operator !== lastOperator && variables.length === 1) {

//         //this won't work for switching from multiply to divide
//         if (lastOperator === 'subtract') {
//             variables[1] = Number(calcDisplayField.value);
//         }
//         else {variables[1] = Number(calcDisplayField.value)};
//         // variables[1] = 0;
//         console.log('----------------')
//         console.log('multiply - operator !== lastOperator and length ===1')
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         runningTotal += operate(lastOperator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         variables.shift();
//         console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
//     else if (operator !== lastOperator && variables.length === 2) {
//         //this won't work for switching from multiply to divide
//         if (lastOperator === 'subtract') {
//             variables[0] = Number(calcDisplayField.value) * -1;
//         }
//         else {variables[0] = Number(calcDisplayField.value)};
//         variables[1] = 0;
//         console.log('multiply - operator !== lastOperator and length ===2')
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         runningTotal += operate(lastOperator, variables[0], variables[1]);
//         lastOperator = operator;
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;
//         variables.shift();
//         console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//     }
// });

// //DIVIDE OPERATION BUTTON - Event Listener (keystroke to be added)
// //PERCENTAGE OPERATION BUTTON - Event Listener (keystroke to be added)


//EQUAL BUTTON - Event Listener Mouse & Keystroke
const btnEqual = document.getElementById('btn-equal');
btnEqual.addEventListener('click', function() {
    // if (firstEqual === false && variables.length === 1) { //implies it's the first time doing operation 
    //     console.log('---------------------');
    //     console.log('EQUAL - firstEqual is false && var.length === 1');
    //     console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     variables.push(Number(calcDisplayField.value));
    //     runningTotal += operate(operator, variables[0], variables[1]);
    //     lastInput = 'equal';
    //     firstEqual = true;
    //     console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     calcHeaderField.value = runningTotal;
    //     calcDisplayField.value = 0;    
    }


// //EQUAL BUTTON - Event Listener Mouse & Keystroke
// const btnEqual = document.getElementById('btn-equal');
// btnEqual.addEventListener('click', function() {
//     if (firstEqual === false && variables.length === 1) { //implies it's the first time doing operation 
//         console.log('---------------------');
//         console.log('EQUAL - firstEqual is false && var.length === 1');
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         variables.push(Number(calcDisplayField.value));
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastInput = 'equal';
//         firstEqual = true;
//         console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;    
//     }
//     //test case 1 - if last input wasn't equal - pass
//     if (lastInput !== 'equal' && variables.length === 1) {
//         console.log('---------------------');
//         console.log('EQUAL - !== equal && variables.length === 1')
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         // variables.shift();
//         // variables.push(Number(calcDisplayField.value));
//         variables[0] = (Number(calcHeaderField.value));
//         variables[1] = (Number(calcDisplayField.value));
//         // if (operator === 'multiply' || operator === 'divide') { variables[1] = 1;}
//         console.log('VARIABLES AFTER PUSH')
//         runningTotal = operate(operator, variables[0], variables[1]);
//         // runningTotal += operate(operator, variables[0], variables[1]);
//         lastInput = 'equal';
//         console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;        
        
//     }
//     else if (lastInput !== 'equal' && variables.length === 2) {
//         console.log('EQUAL - lastInput !== equal && variables.length === 2')
//         console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         variables.shift();
//         variables.push(Number(calcDisplayField.value));
//         runningTotal += operate(operator, variables[0], variables[1]);
//         lastInput = 'equal';
//         console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
//         calcHeaderField.value = runningTotal;
//         calcDisplayField.value = 0;        
//     }
    // else if (lastInput === 'equal' && operator === 'add') {
    //     console.log('EQUAL - lastInput === equal && operator === add')
    //     console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     //if a number is pressed after subsequent equal then start from number and increment by total
    //     runningTotal += operate(operator, 0, variables[1]);
    //     lastInput = 'equal';
    //     console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     calcHeaderField.value = runningTotal;
    //     calcDisplayField.value = 0;        
    // }

    // else if (lastInput === 'equal' && operator === 'subtract') {
    //     console.log('EQUAL - lastInput === equal && operator === subtract')
    //     console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     //if a number is pressed after subsequent equal then start from number and increment by total
    //     runningTotal += operate(operator, 0, variables[1]);
    //     lastInput = 'equal';
    //     console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     calcHeaderField.value = runningTotal;
    //     calcDisplayField.value = 0;        
    // }

    // else if (lastInput === 'equal' && operator === 'multiply') {
    //     //if a number is pressed after subsequent equal then start from number and increment by total
    //     console.log('EQUAL - lastInput === equal && operator === MULTIPLY')
    //     console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     runningTotal *= operate(operator, 1, variables[1]);
    //     lastInput = 'equal';
    //     console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     calcHeaderField.value = runningTotal;
    //     calcDisplayField.value = 0;        
    // }

    // else if (lastInput === 'equal' && operator === 'divide') {
    //     console.log('EQUAL - lastInput === equal && operator === DIVIDE')
    //     console.log('BEFORE var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     //if a number is pressed after subsequent equal then start from number and increment by total
    //     runningTotal /= operate(operator, 1, variables[1]);
    //     lastInput = 'equal';
    //     console.log('AFTER var: ' + variables + '... operator: ' + operator + '... lastOperator: ' + lastOperator + '... running: ' + runningTotal);
    //     calcHeaderField.value = runningTotal;
    //     calcDisplayField.value = 0;        
    // }
});  

//BUG: 100 - 50 * IS GIVING 150... IT SHOULD BE 50 