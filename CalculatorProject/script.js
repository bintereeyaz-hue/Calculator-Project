let display = document.getElementById("display");
let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendNumber(number) {
    if (operator === "") {
        firstNumber += number;
        display.value = firstNumber;
    } else {
        secondNumber += number;
        display.value = secondNumber;
    }
}

function setOperator(op) {
    if (firstNumber === "") return;
    operator = op;
}

function calculate() {
    if (firstNumber === "" || secondNumber === "" || operator === "") return;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result = 0;

    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") result = num1 / num2;

    display.value = result;
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.value = "";
}
