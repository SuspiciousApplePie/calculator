function addition (num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function operation (num1, num2, operation) {
    switch (operation) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '×':
        case '*':
            return multiplication(num1, num2);
        case '/':
        case '÷':
            if (num1 === 0 || num2 === 0) return 'Error';
            return division(num1, num2);
    }
}

function init() {
    const btn = document.querySelector('.main-content');
    btn.addEventListener('click', getClick);
    document.addEventListener('keydown', getKeyboardClick);
}

function getClick (e) {
    const input = document.querySelector('input');
    if (e.target.classList.contains('num')) {
        // Check if there is already a dot in input
        if (e.target.id === 'dot' && input.value.includes('.')) return;
        typeNumber(input, e.target.textContent);
    } else if (e.target.classList.contains('ops')) {
        // For Chain Operation: Verify if operator is true and second num is not null
        if (calculatorState.operator && calculatorState.secondNum !== null) {
            calculatorState.firstNum = operation(Number(calculatorState.firstNum), Number(calculatorState.secondNum), calculatorState.operator);
            calculatorState.secondNum = null;
        }
        getOperation(input, e.target.textContent)  
    } else if (e.target.id === 'clear') {
        clearNum(input);
    } else if (e.target.id === 'all-clear') {
        allClear(input);
    } else if (e.target.id === 'equal') {
        showEqual(input);
    }
}

function getKeyboardClick(e) {
    if (e.target.tagName === 'INPUT') e.preventDefault();

    const input = document.querySelector('input');
    // Check if key is number or dot.
    if (Number((e.key) >= 0 && Number(e.key) <= 9) || e.key === '.') {
        if (e.key === '.' && input.value.includes('.')) return;
        typeNumber(input, e.key);
    }
    
    switch (e.key) {
        case '+':
        case '-':
        case '*':
        case '/':
            // For Chain Operation: Verify if operator is true and second num is not null
            if (calculatorState.operator && calculatorState.secondNum !== null) {
                calculatorState.firstNum = operation(Number(calculatorState.firstNum), Number(calculatorState.secondNum), calculatorState.operator);
                calculatorState.secondNum = null;
        }
            getOperation(input, e.key);
            break;
        case '=':
        case 'Enter':
            showEqual(input);
            break;
        case 'Backspace':
        case 'Delete':
            clearNum(input);
            break;
        case 'x':
        case 'X':
            allClear(input);
    }
}

function typeNumber(input, content) {
    if (input.value === '0' && content !== '.') {
        input.value = content;
    } else {
        input.value += content;
    }
    if (!calculatorState.operator) {
        calculatorState.firstNum = input.value;
    } else {
        calculatorState.secondNum = input.value;
    }
}

function getOperation(input, opsSymbol) {
    if (calculatorState.firstNum) {
        calculatorState.operator = opsSymbol;
        input.value = '0';
    }
}

function clearNum(input) {
    input.value = input.value.slice(0, -1);
    // Check where the input gets assigned in object.
    if (!calculatorState.operator) {
        calculatorState.firstNum = input.value;
        if (calculatorState.firstNum === '') {
            calculatorState.firstNum = null;
            input.value = 0;
        }
    } else {
        calculatorState.secondNum = input.value;
        if (calculatorState.secondNum === '') {
            calculatorState.secondNum = null;
            input.value = 0;
        }
    }
}

function allClear(input) {
    input.value = null;
    resetState();
    input.value = 0;
}

function showEqual(input) {
    // If all state is not null show answer
    if (calculatorState.firstNum && calculatorState.secondNum && calculatorState.operator) {
        input.value = operation(Number(calculatorState.firstNum), 
                                Number(calculatorState.secondNum), 
                                calculatorState.operator).toFixed(2);
        resetState()
        calculatorState.firstNum = input.value;
    }
}

function resetState() {
    calculatorState.firstNum = null;
    calculatorState.secondNum = null;
    calculatorState.operator = null;
}

const calculatorState = {
    firstNum: null,
    secondNum: null,
    operator: null,
}

init();