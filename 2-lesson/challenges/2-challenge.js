//Request a five-unit number from a user and check whether it is a palindrome.

let number = prompt("Enter 5 digit polyndrome");
if (
  number[0] == number[number.length - 1] &&
  number[1] == number[number.length - 2]
) {
  alert("The number is a polyndrome");
} else {
  alert("The number is not a polyndrome");
}
