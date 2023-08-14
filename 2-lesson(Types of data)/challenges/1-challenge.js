//Request a three-digit number from a user and check whether it has identical digits in it.

let number = prompt("Enter three-digit number");
if ((number[0] == number[1]) == number[2]) {
  alert("Digits are equal");
} else {
  alert("Digits are not equal");
}
