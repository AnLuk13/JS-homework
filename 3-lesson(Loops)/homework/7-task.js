//Request a number and check if the number is odd, even or zero. Use switch.

let number = parseInt(prompt("Enter a number"));

switch (number) {
  case 0:
    console.log("The number is zero.");
    break;
  case number % 2 == 0:
    console.log("The number is even.");
    break;
  default:
    console.log("The number is odd.");
    break;
}
