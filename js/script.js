function addition (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function subtraction(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function multiplication(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
}

function division(num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
}

function operation (num1, num2, operation) {
    switch (operation) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '×':
            return multiplication(num1, num2);
        case '÷':
            return division(num1, num2);
    }
}

function init() {
    const btn = document.querySelector('.main-content');
    console.log(btn);
    btn.addEventListener('click', getClick);
}

function getClick (e) {
    const input = document.querySelector('input');
    if (e.target.classList.contains('num')) {
        typeNumber(input, e.target.textContent);
    } else if (e.target.classList.contains('ops')) {
        getOperation(input, e.target.textContent)
    } else if (e.target.id === 'clear') {
        clearNum(input);
    } else if (e.target.id === 'all-clear') {
        allClear(input);
    } else if (e.target.id === 'equal') {
        console.log('equal');
    }
}

function typeNumber(input, content) {
    input.value += content;
    if (!calculatorState.operator) {
        calculatorState.firstNum = input.value;
    } else {
        calculatorState.secondNum = input.value;
    }
    console.log(calculatorState);
}

function getOperation(input, opsSymbol) {
    if (calculatorState.firstNum) {
        calculatorState.operator = opsSymbol;
        input.value = null;
    }
    console.log(calculatorState);
}

function clearNum(input) {
    input.value = input.value.slice(0, -1);
}

function allClear(input) {
    input.value = null;
    console.log('all');
}

const calculatorState = {
    firstNum: null,
    secondNum: null,
    operator: null,
}

init();