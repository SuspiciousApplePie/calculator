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
            if (num1 === 0 || num2 === 0) return 'Error';
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
        console.log(calculatorState);
        if (calculatorState.operator && calculatorState.secondNum !== null) {
            calculatorState.firstNum = operation(Number(calculatorState.firstNum), Number(calculatorState.secondNum), calculatorState.operator);
            calculatorState.secondNum = null;
            console.log(calculatorState);
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
    if (!calculatorState.operator) {
        calculatorState.firstNum = input.value;
        if (calculatorState.firstNum === '') calculatorState.firstNum = null;
    } else {
        calculatorState.secondNum = input.value;
        if (calculatorState.secondNum === '') calculatorState.secondNum = null;
    }

    console.log(calculatorState);
}

function allClear(input) {
    input.value = null;
    resetState();
    console.log(calculatorState);
}

function showEqual(input) {
    if (calculatorState.firstNum && calculatorState.secondNum && calculatorState.operator) {
        input.value = operation(Number(calculatorState.firstNum), 
                                Number(calculatorState.secondNum), 
                                calculatorState.operator);
        calculatorState.firstNum = input.value;
        console.log(calculatorState);
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