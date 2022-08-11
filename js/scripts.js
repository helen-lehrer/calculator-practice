//Business UI Logic
const valueOneNumber = function inputOneValue () {
 let returnValue1 = parseInt(document.getElementById("numberOne").value);
 return returnValue1;
};

const valueTwoNumber = function inputTwoValue () {
  let returnValue2 = parseInt(document.getElementById("numberTwo").value);
  return returnValue2;
};

function addOperation() {
  const addOutput = valueOneNumber + valueTwoNumber;
  return addOutput;
}

function subtractOperation() {
  const subtractOutput = valueOneNumber - valueTwoNumber;
  return subtractOutput;
}

function divideOperation() {
  const divideOutput = valueOneNumber / valueTwoNumber;
  return divideOutput;
}

function multiplyOperation() {
  const multiplyOutput = valueOneNumber * valueTwoNumber;
  return multiplyOutput;
}


function calculateAnswer(valueOneNumber, valueTwoNumber) {
  const functionOption = document.getElementById("functionInput").value;
  if (functionOption === 1) {
    addOperation();
  } else if (functionOption === 2) {
    subtractOperation();
  } else if (functionOption === 3) {
    divideOperation();
  } else if (functionOption === 4) {
    multiplyOperation();
  } else {
    console.log("Calculate Answer Broke");
  }
};

let button = document.querySelector("button");
button.addEventListener("click", calculateAnswer);