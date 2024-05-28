const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.calculator-button');

let currentInput = '0';
let firstOperand = null;
let secondOperand = false;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('clear')) {
            currentInput = '0';
            firstOperand = null;
            secondOperand = false;
            operator = null;
        } else if (button.classList.contains('operation')) {
            if (operator && secondOperand) {
                currentInput = performCalculation(firstOperand, currentInput, operator);
                display.value = currentInput;
                firstOperand = currentInput;
            } else {
                firstOperand = currentInput;
            }
            operator = value;
            secondOperand = true;
            currentInput = '0';
        } else if (button.classList.contains('equals')) {
            if (operator) {
                currentInput = performCalculation(firstOperand, currentInput, operator);
                display.value = currentInput;
                firstOperand = null;
                operator = null;
                secondOperand = false;
            }
        } else if (button.classList.contains('&plusmn;')) {
            currentInput = (parseFloat(currentInput) * -1).toString();
        } else if (button.classList.contains('%')) {
            currentInput = (parseFloat(currentInput) / 100).toString();
        } else {
            if (currentInput === '0' || secondOperand) {
                currentInput = value;
                secondOperand = false;
            } else {
                currentInput += value;
            }
        }
        display.value = currentInput;
    });
});

function performCalculation(first, second, operator) {
    const firstNum = parseFloat(first);
    const secondNum = parseFloat(second);

    switch (operator) {
        case '+':
            return (firstNum + secondNum).toString();
        case '-':
            return (firstNum - secondNum).toString();
        case '*':
            return (firstNum * secondNum).toString();
        case '/':
            return (firstNum / secondNum).toString();
        default:
            return second;
    }
}