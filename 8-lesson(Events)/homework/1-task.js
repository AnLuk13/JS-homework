//Create a functional calculator; it should be able to subtract, sum, divide and multiple numbers.
//Also every symbol must be shown on the screen

const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");
const backspace = document.querySelector(".backspace");

display.value = "0";
let number = "";
let operator = "";
let checkOperator = false;
let checkBackspace = false;

backspace.addEventListener("click", (event) => {
  if (number.length < 2) {
    checkBackspace = true;
    display.value = "0";
  } else if (!checkBackspace) {
    numberArrayBackspace = number.trim().slice(0, -1);
    number = numberArrayBackspace;
    display.value = number;
  }
});

buttons.addEventListener("click", (event) => {
  const clickedButton = event.target;

  if (clickedButton.classList.contains("digit")) {
    const digit = clickedButton.textContent;
    number += digit;
    display.value = number;
    checkOperator = false;
    checkBackspace = false;
  } else if (clickedButton.classList.contains("operator")) {
    const newOperator = clickedButton.textContent;
    if (!checkOperator) {
      operator = clickedButton.textContent;
      number += ` ${operator} `;
      display.value = number;
      checkOperator = true;
      checkBackspace = false;
    } else {
      operator = newOperator;
      numberArray = number.trim().split(" ");
      numberArray.pop();
      number = numberArray.join(" ") + ` ${operator} `;
      display.value = number;
    }
  } else if (clickedButton.classList.contains("dot")) {
    number += ".";
    display.value = number;
    checkOperator = true;
    checkBackspace = false;
  } else if (clickedButton.id === "clear") {
    number = "";
    display.value = "0";
  } else if (clickedButton.id === "equal") {
    const result = eval(number);
    display.value = result;
    number = result.toString();
    checkBackspace = false;
  }
});
