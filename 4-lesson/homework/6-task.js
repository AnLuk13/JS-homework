//Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range.
//Use the previous function to check, if numbers are perfect.

function perfectNumber(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return number == sum;
}

function rangeValues(min, max) {
  for (var x = min; x <= max; x++) {
    if (perfectNumber(x)) {
      console.log(`The number ${x} is perfect.`);
    }
  }
}

rangeValues(2, 496);
