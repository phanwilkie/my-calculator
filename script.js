//Main variables
const calcDisplayField = document.getElementById("calcDisplay");
const calcHeaderField = document.getElementById("calcHeader");
const currentOperatorField = document.getElementById("operatorField");
let runningTotal = 0;
let variable = 0;
let operator = '';
calcDisplayField.value = 0;

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


//Button 1 - Event Listener Mouse & Keystroke
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
//if initial value is not 0 then add to string

    calcDisplay.value += 1;

//otherwise clear the 0    
});

//Button 2 -  - Event Listener Mouse & Keystroke
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function() {
    calcDisplay.value += 2;
});

//Button 3 -  - Event Listener Mouse & Keystroke
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function() {
    calcDisplay.value += 3;
});

// //Button 4 -  - Event Listener Mouse & Keystroke
// const btn4 = document.getElementById('btn4');
// btn4.addEventListener('click', function() {
//     calcDisplay.value += 4;
// });

// //Button 5 -  - Event Listener Mouse & Keystroke
// const btn5 = document.getElementById('btn5');
// btn5.addEventListener('click', function() {
//     calcDisplay.value += 5;
// });

// //Button 6 -  - Event Listener Mouse & Keystroke
// const btn6 = document.getElementById('btn6');
// btn6.addEventListener('click', function() {
//     calcDisplay.value += 6;
// });

// //Button 7 -  - Event Listener Mouse & Keystroke
// const btn7 = document.getElementById('btn7');
// btn7.addEventListener('click', function() {
//     calcDisplay.value += 7;
// });

// //Button 8 -  - Event Listener Mouse & Keystroke
// const btn8 = document.getElementById('btn8');
// btn8.addEventListener('click', function() {
//     calcDisplay.value = +8;
// });

// //Button 9 -  - Event Listener Mouse & Keystroke
// const btn9 = document.getElementById('btn9');
// btn9.addEventListener('click', function() {
//     calcDisplay.value = +9;
// });

//Button 0 -  - Event Listener Mouse & Keystroke
const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', function() {
    //if initial value is not 0 then add to string
    calcDisplay.value += 0;
});


//+ Button - Event Listener Mouse & Keystroke
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', function() {
    operator = 'add';
    variable = Number(calcDisplayField.value);
    runningTotal = operate(operator, runningTotal, variable);
    currentOperatorField.textContent = '+';
    calcHeaderField.value = runningTotal;

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

