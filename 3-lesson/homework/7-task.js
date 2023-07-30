//Request a number and check if the number is odd, even or zero. Use switch.

let number = parseInt(prompt("Enter a number"));

switch (number % 2) {
  case 0:
    alert("The number is even");
    break;
  case 1:
    alert("The number is odd");
    break;
}
