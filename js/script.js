function addition (num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

function subtraction(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function operation (num1, num2, operation) {
    if (operation === '+') {
        addition(num1, num2);
    }
}