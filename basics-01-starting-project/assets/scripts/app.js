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

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    if (
     calculationType !== 'ADD' &&
     calculationType !== 'SUBTRACT' &&
     calculationType !== 'MULTIPLY' &&
     calculationType !== 'DIVIDE' ||
     !enteredNumber

    ) {
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    } 
    createAndWriteOutput(mathOperator, initialResult, enteredNumber); 
    getLogEntries(calculationType, initialResult, enteredNumber, currentResult);
}

function add () {
    calculateResult('ADD');
}

function subtract () {
    calculateResult('SUBTRACT');
}

function multiply () {
    calculateResult('MULITPLY');
}

function divide () {
    calculateResult('DIVIDE');
}
// Btns from vendor.js
addBtn.addEventListener('click', add); 
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
