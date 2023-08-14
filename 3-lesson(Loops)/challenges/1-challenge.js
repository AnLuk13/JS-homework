//Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result
//and ask if the user wants one more. The loop continues until the user refuses.

let response = "yes";

while (response === "yes") {
  let firstNumber = parseInt(prompt("Enter the first number"));
  let secondNumber = parseInt(prompt("Enter the second number"));
  let sign = prompt("Enter the sign");
  let operation;

  if (sign === "+") {
    operation = firstNumber + secondNumber;
  }
  if (sign === "-") {
    operation = firstNumber - secondNumber;
  }
  if (sign === "*") {
    operation = firstNumber * secondNumber;
  }
  if (sign === "/") {
    operation = firstNumber / secondNumber;
  }

  console.log(`The result from ${sign} operation is ${operation}`);
  response = prompt("Enter yes/no");
}

console.log("Goodbye!");
