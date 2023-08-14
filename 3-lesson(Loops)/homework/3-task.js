//Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

let number = prompt("Enter a number to find the divisors");

for (var i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}
