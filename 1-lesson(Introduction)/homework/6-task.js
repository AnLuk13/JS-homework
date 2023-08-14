//Request user’s name, age, country of birth and display them in the console in different lines with
//different colors to be easily visible

let name = prompt("Enter the name");
let age = prompt("Enter the age");
let countryOfBirth = prompt("Enter the country of birth");
let nameStyles = "color:blue";
let ageStyles = "color:green";
console.log("%cname", nameStyles);
console.log("%cage", ageStyles);
console.log("%ccountryOfBirth", "color:red;");
