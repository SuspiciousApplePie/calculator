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
            addition(num1, num2);
            break;
        case '-':
            subtraction(num1, num2);
            break;
        case '*':
            multiplication(num1, num2);
            break;
        case '/':
            division(num1, num2);
            break;
    }
}

function init() {
    const btn = document.querySelector('.main-content');
    console.log(btn);
    btn.addEventListener('click', getClick);
}

function getClick (e) {
    const input = document.querySelector('input');
    console.log(input)
    if (e.target.classList.contains('num')) {
        typeNumber(input, e.target.textContent);
    } else if (e.target.id === 'clear') {
        clearNum(input);
    }
}

function typeNumber(input, content) {
    input.value += content;
}

function clearNum(input) {
    input.value = input.value.slice(0, -1);
}

function allClear(input) {
    input.value = '';
    console.log('all');
}

const calculatorState = {
    firstNum: null,
    secondNum: null,
    operator: null,
}

init();