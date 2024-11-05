function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const errorMessage = document.getElementById('error-message');
    const resultDisplay = document.getElementById('result');
    
    errorMessage.textContent = '';
    resultDisplay.textContent = 'Результат: ';

    if (!num1 || !num2) {
        errorMessage.textContent = 'Будь ласка, введіть обидва числа.';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        errorMessage.textContent = 'Невірний ввід. Введіть тільки числа.';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                errorMessage.textContent = 'Ділення на нуль неможливе.';
                return;
            }
            result = number1 / number2;
            break;
        default:
            errorMessage.textContent = 'Невідома операція.';
            return;
    }

    result = Math.round(result * 100) / 100;
    resultDisplay.textContent = `Результат: ${result}`;
}
