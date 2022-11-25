//grab id display inside container
const display = document.querySelector('#display');

//create empty array to store 1st number
let firstNumber = [];
//create empty array to store 2nd number
let secondNumber = [];
//create empty array to store operators
let operators = [];
//create empty array to store results
let results = [];
//display 0 on page load
let displayValue = 0;

//displayValue inside display
display.textContent = displayValue;

//grab all buttons
const buttons = document.querySelectorAll('button');
//grab buttons with id numbers
const numbersBtn = document.querySelectorAll('#numbers');
//grab equal button
const equalBtn = document.querySelector('#equal');
//grab dot button
const dotBtn = document.querySelector('#dot');
//grab clear button
const clearBtn = document.querySelector('#clear');
//grab operators buttons
const operatorsBtn = document.querySelectorAll('#operator');
//grab percent button
const percentBtn = document.querySelector('#percent');
//grab backspace button
const backspaceBtn = document.querySelector('#backspace');

//event listener for keydown
document.addEventListener('keydown', (e) => {
    //if keydown is a number
    if (e.key >= 0 && e.key <= 9) {
        //click on numbersBtn with same text content as keydown
        numbersBtn.forEach((numberBtn) => {
            if (numberBtn.textContent === e.key) {
                numberBtn.click();
            }
        });
    } else if (e.key === '.') {
        dotBtn.click();
    } else if (e.key === 'Enter' || e.key === '=') {
        equalBtn.click();
    } else if (e.key === 'Delete') {
        clearBtn.click();
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        //click on operatorsBtn with same text content as keydown
        operatorsBtn.forEach((operatorBtn) => {
            if (operatorBtn.textContent === e.key) {
                operatorBtn.click();
            }
        });
    } else if (e.key === '%') {
        percentBtn.click();
    } else if (e.key === 'Backspace') {
        //run backspace function
        backspace();
    }
});

//disable click on equalBtn
equalBtn.disabled = true;



//create function equal
function equal() {
    //if firstNumber array is not empty and operators array is not empty and secondNumber array is not empty
    if (firstNumber.length !== 0 && operators.length !== 0 && secondNumber.length !== 0) {
        //convert firstNumber array to number
        let firstNumberValue = Number(firstNumber.join(''));
        //convert secondNumber array to number
        let secondNumberValue = Number(secondNumber.join(''));
        //if operator is +
        if (operators[0] === '+') {
            //add firstNumberValue and secondNumberValue
            let result = firstNumberValue + secondNumberValue;
            //if result length is more than 10
            if (result.toString().length > 10) {
                //display error
                display.textContent = 'Error';
            } else {
                //push result to results array
                results.push(result);
                //display result
                display.textContent = results.join('');
            }
        //if operator is -
        } else if (operators[0] === '-') {
            //subtract firstNumberValue and secondNumberValue
            let result = firstNumberValue - secondNumberValue;
            //if result length is more than 10
            if (result.toString().length > 10) {
                //display error
                display.textContent = 'Error';
            } else {
                //push result to results array
                results.push(result);
                //display result
                display.textContent = results.join('');
            }
        //if operator is *
        } else if (operators[0] === '*') {
            //multiply firstNumberValue and secondNumberValue
            let result = firstNumberValue * secondNumberValue;
            //if result length is more than 10
            if (result.toString().length > 10) {
                //display error
                display.textContent = 'Error';
            } else {
                //push result to results array
                results.push(result);
                //display result
                display.textContent = results.join('');
            }
        //if operator is /
        } else if (operators[0] === '/') {
            //if secondNumberValue is 0
            if (secondNumberValue === 0) {
                //display error
                display.textContent = 'Error';
            } else {
                //divide firstNumberValue and secondNumberValue
                let result = firstNumberValue / secondNumberValue;
                //if result length is more than 10
                if (result.toString().length > 10) {
                    //display error
                    display.textContent = 'Error';
                } else {
                    //push result to results array
                    results.push(result);
                    //display result
                    display.textContent = results.join('');
                }
            }
        }
    }
}