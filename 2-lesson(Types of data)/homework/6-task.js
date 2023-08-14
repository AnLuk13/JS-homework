//Request date of birth, calculate age and show if the person is over 18

let dob = prompt("Enter your date of birth (YYYY-MM-DD):");
let dobDate = new Date(dob);
let today = new Date();

let age = today - dobDate;
let ageInYears = age / (1000 * 60 * 60 * 24 * 365);

if (isNaN(ageInYears)) {
  alert(
    "Invalid date of birth. Please enter a valid date in the format (YYYY-MM-DD)."
  );
} else {
  alert(`Your age is ${Math.floor(ageInYears)}`);

  if (ageInYears >= 18) {
    alert("You are over 18 years old");
  } else {
    alert("You are under 18 years old");
  }
}
