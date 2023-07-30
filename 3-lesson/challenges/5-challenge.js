let numberToGuess = parseInt(prompt("Enter a number from 0 to 100 to guess"));
let min = 0;
let max = 100;
let guess;

do {
  guess = Math.floor((min + max) / 2);
  let response = prompt(`Is your number > ${guess}? (yes/no/equals)`);

  if (response === "yes") {
    min = guess + 1;
  } else if (response === "no") {
    max = guess - 1;
  } else if (response === "equals") {
    alert(`Your number is ${guess}`);
    break;
  } else {
    alert("Invalid input. Please respond with 'yes', 'no', or 'equals'.");
  }
} while (min <= max);
