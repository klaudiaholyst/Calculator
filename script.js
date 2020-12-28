let resultWindow = document.getElementById("result");

let firstNumber = 0;
let secondNumber = 0;
let firstOption = '=';
let secondOption = false;
let choosingOption = false;

const handleStartingPoint = () => {
  firstNumber = 0;
  secondNumber = 0;
  firstOption = '=';
  secondOption = false;
};

const handleClickedNumber = (e) => {
  if (secondOption === "=") handleStartingPoint();
  choosingOption = false;
  let pressedNumber = e.target.value;
  secondNumber = parseInt(secondNumber.toString() + pressedNumber.toString());
  resultWindow.value = secondNumber;
};

const handleClickedOption = (e) => {
  secondOption = e.target.value;
  if (choosingOption) {
    firstOption = secondOption;
  } else {
    handleOperation(firstOption);
  }
};

const handleOperation = (e) => {
  switch (firstOption) {
    case "+":
      firstNumber = firstNumber + secondNumber;
      break;
    case "-":
      firstNumber = firstNumber - secondNumber;
      break;
    case "x":
      firstNumber = firstNumber * secondNumber;
      break;
    case "=":
      firstNumber = secondNumber;
      break;
  }
  resultWindow.value = firstNumber;
  secondNumber = 0;
  firstOption = secondOption;
  choosingOption = true;
};

const handleClick = (e) => {
  if (e.target.nodeName === "BUTTON") {
    const classList = e.target.classList;
    if (classList.contains("number")) handleClickedNumber(e);
    if (classList.contains("option")) handleClickedOption(e);
  }
};

document.getElementById("calculator").addEventListener("click", handleClick);
