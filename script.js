let total = 0;

function operate(operator, a, b) {
    if (operator === 'add') { return add(a, b)}
    else if (operator === 'subtract') {return subtract(a, b)}
    else if (operator === 'multiply') {return multiply(a, b)}
    else {return divide(a, b)};
}

function add(a, b) {return a + b;};

function subtract(a, b) {return a - b;};

function multiply(a, b) {return a * b;};

function divide(a, b) {return a / b;};

// let a = 1, b = 1;
// console.log(`Add: ${add(a, b)}, Subtract: ${subtract(a, b)}, Multiply: ${multiply(a, b)}, Divide: ${divide(a, b)}`);

// console.log(`Add: ${calculate('add', 4, 1)}, Subtract: ${calculate('subtract', 4, 1)}, Multiply: ${calculate('multiply', 4, 1)}, Divide: ${calculate('divide', 4, 1)}`);
console.log(`Add: ${operate('add', 12, 12)}`);
console.log(`Subtract: ${operate('subtract', 12, 17)}`);
console.log(`Multiply: ${operate('multiply', 12, 12)}`);
console.log(`Divide: ${operate('divide', 12, 12)}`);