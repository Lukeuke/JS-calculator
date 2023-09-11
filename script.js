let displayNumber = 0
let previousNumber = 0
let currNumber = 0

let currOperaion = "";

let displayElement = document.getElementById('calculator_output')
let displayHistory = document.getElementById('calculator_history')

const getInputNumber = (number) => {
    console.log(number.innerHTML)
    
    addToDisplay(number.innerHTML)
}

const addToDisplay = (number) => {
    currNumber = parseFloat(displayElement.innerHTML += number)
    displayNumber = currNumber
}

const updateDisplay = (number) => {
    displayElement.innerHTML = number;
}

const clearAll = () => {
    displayElement.innerHTML = ""
    displayHistory.innerHTML = ""

    currOperaion = "";
    currNumber = 0
    previousNumber = 0
    displayNumber = 0
}

const clearDisplay = () => {
    displayElement.innerHTML = ""
}

const getOperation = (operation) => {

    previousNumber = currNumber
    currNumber = 0

    currOperaion = operation.value

    displayHistory.innerHTML = `${previousNumber} ${currOperaion}`
    displayElement.innerHTML = ""

}

const specialOperation = (operation) => {
    switch (operation.value) {
        case "sqrt":
            currNumber = parseFloat(Math.sqrt(currNumber))
            updateDisplay(currNumber)
            break;
        case "%":
            currNumber /= 100
            updateDisplay(currNumber)
        break;
        case "1/x":
            currNumber = 1 / currNumber
            updateDisplay(currNumber)
        break;
        case "squared":
            currNumber *= currNumber;
            updateDisplay(currNumber)
        break;
        case "+/-":
            currNumber = -currNumber
            updateDisplay(currNumber)
        break;
        case ",":
            updateDisplay(currNumber + ".")
        break;
        default:
            break;
    }
}

const calculate = () => {
    switch (currOperaion) {
        case "+":
            updateCalculatorAfterCalcualte(previousNumber + currNumber)
            break;
        case "-":
            updateCalculatorAfterCalcualte(previousNumber - currNumber)
        break;
        case "*":
            updateCalculatorAfterCalcualte(previousNumber * currNumber)
        break;
        case "/":
            updateCalculatorAfterCalcualte(previousNumber / currNumber)
        break;
        default:
            break;
    }
}

const updateCalculatorAfterCalcualte = (calculated) => {
    displayHistory.innerHTML = `${previousNumber} ${currOperaion} ${currNumber}`
    currNumber = calculated;
    displayElement.innerHTML = calculated;
}

const deleteLast = () => {
    let value = displayElement.innerHTML

    displayElement.innerHTML = value.substring(0, value.length - 1)
}