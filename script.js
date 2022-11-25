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