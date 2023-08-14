//Request age, check if user it is over 18 and display message “You are underaged” or “You are over 18”(use ternary operator)

let dob = prompt("Enter your date of birth (YYYY-MM-DD):");
let dobDate = new Date(dob);
let today = new Date();

let age = today - dobDate;
let ageInYears = age / (1000 * 60 * 60 * 24 * 365);

isNaN(ageInYears)
  ? alert(
      "Invalid date of birth. Please enter a valid date in the format (YYYY-MM-DD)."
    )
  : alert(`Your age is ${Math.floor(ageInYears)}`);

ageInYears >= 18
  ? alert("You are over 18 years old")
  : alert("You are under 18 years old");
