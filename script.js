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

//add event listener to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //if firstNumber array is empty or secondNumber array is empty
        if (firstNumber.length === 0 || secondNumber.length === 0) {
            //disable equal button
            equalBtn.disabled = true;
        }
        //if array numbers object 1 is empty and operator array is empty
        if (Object.keys(numbers[0]).length === 0 && operators.length === 0) {
            //if button clicked is a number
            if (e.target.id === 'numbers' || e.target.textContent === '.') {
                //enable percent button
                percentBtn.disabled = false;
                //grab text content of numbersBtn clicked
                let number = e.target.textContent;
                //push number to firstNumber array
                firstNumber.push(number);
                //dont allow click on dotBtn if firstNumber array includes dot
                if (firstNumber.includes('.')) {
                    dotBtn.disabled = true;
                    //if . is the first number
                    if (firstNumber[0] === '.') {
                        //add 0 before .
                        firstNumber.unshift('0');
                    } else {
                        //do nothing
                    }
                }
                //dont allow more than 10 numbers
                if (firstNumber.length > 10) {
                    firstNumber.pop();
                }
                //display firstNumber array
                display.textContent = firstNumber.join('');
            } else if (e.target.id === 'operator') {
                //if firstNumber array is not empty
                if (firstNumber.length !== 0) {
                    //enable percent button
                    percentBtn.disabled = false;
                    //enable click on numbersBtn and equalBtn and dotBtn
                    numbersBtn.forEach((numberBtn) => {
                        numberBtn.disabled = false;
                    });
                    dotBtn.disabled = false;
                    //grab text content of operatorsBtn clicked
                    let operator = e.target.textContent;
                    //push operator to operators array
                    operators.push(operator);
                    //display operator
                    display.textContent = operators.join('');
                } else {
                    //display error
                    display.textContent = 'Error';
                }
            } else {
                //do nothing
            }
        //if firstNumber array is not empty and operators array is not empty
        } else if (firstNumber.length !== 0 && operators.length !== 0) {
            //if button clicked is a number
            if (e.target.id === 'numbers' || e.target.textContent === '.') {
                //enable percent button
                percentBtn.disabled = false;
                //enable click on equalBtn
                equalBtn.disabled = false;
                //dotBtn enabled
                dotBtn.disabled = false;
                //grab text content of numbersBtn clicked
                let number = e.target.textContent;
                //push number to secondNumber array
                secondNumber.push(number);
                //don't allow click on dotBtn if secondNumber array includes dot
                if (secondNumber.includes('.')) {
                    dotBtn.disabled = true;
                    //if . is the first number
                    if (secondNumber[0] === '.') {
                        //add 0 before .
                        secondNumber.unshift('0');
                    } else {
                        //do nothing
                    }
                }
                //dont allow more than 10 numbers
                if (secondNumber.length > 10) {
                    secondNumber.pop();
                }
                //display secondNumber array
                display.textContent = secondNumber.join('');
            } else if (e.target.id === 'equal') {
                //enable percent button
                percentBtn.disabled = false;
                //run equal function
                equal();
                //clear all
                firstNumber = [];
                secondNumber = [];
                operators = [];
                firstNumber = results;
                results = [];
                //dont allow click on numbersBtn and equalBtn and dotBtn
                numbersBtn.forEach((numberBtn) => {
                    numberBtn.disabled = true;
                });
                equalBtn.disabled = true;
                dotBtn.disabled = true;
            } else if (firstNumber.length !== 0 && operators.length !== 0 &&
            secondNumber.length !== 0 && e.target.id === 'operator') {
                //run equal function
                equal();
                //clear all
                firstNumber = [];
                secondNumber = [];
                operators = [];
                firstNumber = results;
                results = [];
                //grab text content of operatorsBtn clicked
                let operator = e.target.textContent;
                //push operator to operators array
                operators.push(operator);
                //display operator
                display.textContent = operators.join('');
            }
        }
        if (e.target.id === 'clear') {
            //run clear function
            clear();
        }
        if (e.target.id === 'plusMinus') {
            //run plusMinus function
            plusMinus();
        }
        if (e.target.id === 'percent') {
            //run percentage function
            percent();
        }
    });
});

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

//create function clear
function clear() {
    //clear firstNumber array
    firstNumber = [];
    //clear secondNumber array
    secondNumber = [];
    //clear operators array
    operators = [];
    //clear results array
    results = [];
    //display 0
    display.textContent = 0;
    //allow click on numbersBtn and equalBtn and dotBtn
    numbersBtn.forEach((numberBtn) => {
        numberBtn.disabled = false;
    });
    equalBtn.disabled = false;
    dotBtn.disabled = false;
}

//create function +/-
function plusMinus() {
    //if firstNumber array is not empty
    if (firstNumber.length !== 0) {
        //convert firstNumber array to number
        let firstNumberValue = Number(firstNumber.join(''));
        //multiply firstNumberValue by -1
        let result = firstNumberValue * -1;
        //clear firstNumber array
        firstNumber = [];
        //push result to firstNumber array
        firstNumber.push(result);
        //display result
        display.textContent = firstNumber.join('');
    //if secondNumber array is not empty
    } else if (secondNumber.length !== 0) {
        //convert secondNumber array to number
        let secondNumberValue = Number(secondNumber.join(''));
        //multiply secondNumberValue by -1
        let result = secondNumberValue * -1;
        //clear secondNumber array
        secondNumber = [];
        //push result to secondNumber array
        secondNumber.push(result);
        //display result
        display.textContent = secondNumber.join('');
    }
}

//function percent
function percent() {
    //disable percentBtn
    percentBtn.disabled = true;
    //disable dotBtn
    dotBtn.disabled = true;
    //if firstNumber array is not empty
    if (firstNumber.length !== 0) {
        //convert firstNumber array to number
        let firstNumberValue = Number(firstNumber.join(''));
        //divide firstNumberValue by 100
        let result = firstNumberValue / 100;
        //round result to 2 decimal places
        result = result.toFixed(2);
        //clear firstNumber array
        firstNumber = [];
        //push result to firstNumber array
        firstNumber.push(result);
        //display result
        display.textContent = firstNumber.join('');
    //if secondNumber array is not empty
    } else if (secondNumber.length !== 0) {
        //convert secondNumber array to number
        let secondNumberValue = Number(secondNumber.join(''));
        //divide secondNumberValue by 100
        let result = secondNumberValue / 100;
        //round result to 2 decimal places
        result = result.toFixed(2);
        //clear secondNumber array
        secondNumber = [];
        //push result to secondNumber array
        secondNumber.push(result);
        //display result
        display.textContent = secondNumber.join('');
    }
}

//function backspace working only for firstNumber array and secondNumber array
function backspace() {
    //if firstNumber array is not empty
    if (firstNumber.length !== 0) {
        //if last element of firstNumber array is .
        if (firstNumber[firstNumber.length - 1] === '.') {
            //enable dotBtn
            dotBtn.disabled = false;
        }
        //pop last element of firstNumber array
        firstNumber.pop();
        //display firstNumber array
        display.textContent = firstNumber.join('');
    //if secondNumber array is not empty
    } else if (secondNumber.length !== 0) {
        //if last element of secondNumber array is .
        if (secondNumber[secondNumber.length - 1] === '.') {
            //enable dotBtn
            dotBtn.disabled = false;
        }
        //pop last element of secondNumber array
        secondNumber.pop();
        //display secondNumber array
        display.textContent = secondNumber.join('');
    }
}