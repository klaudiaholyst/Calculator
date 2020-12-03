const calculator = document.getElementById('calculator');
const resultWindow = document.getElementById('result');

let firstNumber = 0;
let secondNumber = 0;

let result;
let option = false;

const handleClickedNumber = (e) => {
        let pressedNumber = e.target.value;
        if (!option) {
        firstNumber =parseFloat(firstNumber.toString() + pressedNumber.toString());
        console.log(firstNumber);
        resultWindow.value = firstNumber;
        } else {
            secondNumber = parseFloat(secondNumber.toString() + pressedNumber.toString());
            resultWindow.value = secondNumber;
        }
}

const handleClickedOption = (e) => {
        option = e.target.value;
        console.log(option)
}

const handleEquals = (e) => {
        console.log('wynik');
        switch (option){
            case '+':
                console.log('sumujemy');
                result = firstNumber+secondNumber;
                break;
            case '-':
                console.log('odejmujemy');
                result = firstNumber-secondNumber;
                break;
            case 'x':
                console.log('mnozymy');
                result = firstNumber*secondNumber;
                break;
        }
        resultWindow.value = result;
}


const handleClick = (e)=>{
    if(e.target.nodeName === "BUTTON" && e.target.classList.contains('number')) handleClickedNumber(e);
    if(e.target.nodeName === "BUTTON" && e.target.classList.contains('option')) handleClickedOption(e);
    if (e.target.nodeName === "BUTTON" && e.target.classList.contains('equals')) handleEquals(e);
}

calculator.addEventListener("click", handleClick)