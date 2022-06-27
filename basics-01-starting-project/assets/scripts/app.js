/*jshint esversion: 8 */
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Parses int input from userInput field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

function getLogEntries(
    opType,
    prevResult,
    newNumber, 
    opResult) {
        const logEntry = {
            prevResult : prevResult,
            operation : opType,
            number : newNumber,
            newResult : opResult
        };
        logEntries.push(logEntry); 
        console.log(logEntries);
    }


// Helper function generates and writes calculation log
function  createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js
}

function add () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber); 
    getLogEntries('ADD', initialResult, enteredNumber, currentResult);
}

function subtract () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    getLogEntries('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    getLogEntries('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /=  enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    getLogEntries('DIVIDE', initialResult, enteredNumber, currentResult);
}
// Btns from vendor.js
addBtn.addEventListener('click', add); 
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
// getlogEntries(enteredNumber);