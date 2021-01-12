const calculator = document.getElementById('calculator');
const resultWindow = document.getElementById('result');

let firstNumber = 0;
let secondNumber = 0;
let previousOption = undefined;
let option = false;
let numberClicked=false;

const handleClickedNumber = (e) => {
    numberClicked = true;
  if (option === '=') {
    firstNumber = 0;
    previousOption = undefined;
  }
  let pressedNumber = e.target.value;
  secondNumber = parseFloat(secondNumber.toString() + pressedNumber.toString());
  resultWindow.value = secondNumber;
};

const handleClickedOption = (e) => {
  option = e.target.value;
  handleEquals(previousOption);
};

const handleEquals = (e) => {
  switch (previousOption) {
    case '+':
      firstNumber = firstNumber + secondNumber;
      secondNumber = 0;
      break;
    case '-':
      console.log('odejmujemy');
      firstNumber = firstNumber - secondNumber;
      secondNumber = 0;
      break;
    case 'x':
      firstNumber = firstNumber * secondNumber;
      secondNumber = 0;
      break;
    case undefined:
      firstNumber = secondNumber;
      secondNumber = 0;
      break;
  }
  resultWindow.value = firstNumber;
  previousOption = option;
};

const handleClick = (e) => {
  if (e.target.nodeName === 'BUTTON' && e.target.classList.contains('number'))
    handleClickedNumber(e);
  if (e.target.nodeName === 'BUTTON' && e.target.classList.contains('option'))
    handleClickedOption(e);
    console.log('firstNumber', firstNumber, 'secondNumber', secondNumber)
};

calculator.addEventListener('click', handleClick);
