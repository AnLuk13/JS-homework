//Request 10 numbers from a user and count, how many are positive, negative, or zero.
//Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.

let numbers = 10;
let number;
let zeroCount = 0;
let positiveCount = 0;
let negativeCount = 0;
let oddCount = 0;
let evenCount = 0;

for (let i = 1; i <= numbers; i++) {
  number = parseInt(prompt("Enter a number"));
  if (number < 0) {
    console.log(`${number} is negative`);
    negativeCount++;
  }
  if (number > 0) {
    console.log(`${number} is positive`);
    positiveCount++;
  } else {
    console.log(`${number} is 0`);
    zeroCount++;
  }

  if (number % 2 == 0) {
    console.log(`${number} is even`);
    oddCount++;
  } else {
    console.log(`${number} is odd`);
    evenCount++;
  }
}

console.log(`Total positive numbers: ${positiveCount}`);
console.log(`Total negative numbers: ${negativeCount}`);
console.log(`Total zeros: ${zeroCount}`);
console.log(`Total odd numbers: ${oddCount}`);
console.log(`Total even numbers: ${evenCount}`);
