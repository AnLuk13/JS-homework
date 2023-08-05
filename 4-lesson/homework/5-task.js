//Write a function that checks if the given number is perfect.
//A perfect number is a number equal to the sum of all its divisors.
//For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

function perfectNumber(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  if (number == sum) {
    console.log(`The number ${number} is perfect`);
  } else {
    console.log(`The number ${number} is not perfect`);
  }
}

perfectNumber(28);
