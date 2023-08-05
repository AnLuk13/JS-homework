//Write a function that accepts 2 numbers and returns -1 if the first one
//is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

function comparison(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 == num2) {
    return 0;
  }

  return -1;
}

console.log(comparison(3, 3));
