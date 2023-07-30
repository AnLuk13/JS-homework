//Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

let number = parseInt(prompt("Enter a number of n digits"));
let i = 0;

while (number !== 0) {
  number = Math.trunc(number / 10);
  i++;
}

alert(`The number has ${i} digits`);
