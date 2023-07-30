//Request a number from a user and ask by how many digits to move it.
//Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

let number = prompt("Enter a number");
let digits = prompt("How much digits to move?");

if (digits >= 0 && digits < number.length) {
  let digitsToMove = number.substring(0, digits);
  let remainingNumber = number.substring(digits);
  alert("The changed number is " + remainingNumber + digitsToMove);
} else {
  alert("Cant do this");
}
