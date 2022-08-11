function addOperation(valueOne, valueTwo) {
  const addOutput = valueOne + valueTwo;
  console.log(addOutput);
  return addOutput;
}

function subtractOperation(valueOne, valueTwo) {
  const subtractOutput = valueOne - valueTwo;
  console.log(subtractOutput);
  return subtractOutput;
}

function divideOperation(valueOne,  valueTwo) {
  const divideOutput = valueOne / valueTwo;
  console.log(divideOutput);
  return divideOutput;
}

function multiplyOperation(valueOne, valueTwo) {
  const multiplyOutput = valueOne * valueTwo;
  console.log(multiplyOutput);
  return multiplyOutput;
}


let operationAnswer = function calculateAnswer() {
  const functionOption = parseInt(document.getElementById("functionInput").value);
  let valueOne = parseInt(document.getElementById("numberOne").value);
  let valueTwo = parseInt(document.getElementById("numberTwo").value);

  if (functionOption === 1) {
    result = addOperation(valueOne, valueTwo);
  } else if (functionOption === 2) {
    result = subtractOperation(valueOne, valueTwo);
  } else if (functionOption === 3) {
    result = divideOperation(valueOne, valueTwo);
  } else if (functionOption === 4) {
    result = multiplyOperation(valueOne, valueTwo);
  } else {
    console.log("Calculate Answer Broke");
  }

  document.getElementById("answer").innerText = result;
};

function submitInput(event) {
  event.preventDefault();
  operationAnswer();
  
}

window.addEventListener("load", function() {
  const form = document.getElementById("calculatorInput");
  form.addEventListener("submit", submitInput);
});