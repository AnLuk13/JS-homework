//Write a function that counts the factorial of a given number.

function factorial(number) {
  var x = 1;
  for (var i = 1; i <= number; i++) {
    x = x * i;
  }
  return x;
}

console.log(factorial(5));
