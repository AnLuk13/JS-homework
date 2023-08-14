//Write a program that requests a number from a user and finds the summation of every number from 1 to num.
//For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

let amount = prompt("Enter a number");
var sum = 0;

for (var i = 1; i <= amount; i++) {
  sum = sum + i;
}

alert(`The sum is ${sum}`);
