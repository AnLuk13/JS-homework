//Request a number, check if it is a number and if it is between 10 and 50

let number = prompt("Enter a number");
if (10 <= number && +number <= 50) {
  alert("Its between 10 and 50");
} else {
  alert("Its not between 10 and 50");
}
