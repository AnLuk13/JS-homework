//Request an email, check if it bigger than 20 character and if it includes @

let email = prompt("Enter an email");

if (email.length >= 20 && email.includes("@")) {
  alert("The email has more than 20 characters and contains @");
} else {
  alert("The email has fewer than 20 characters or doesnt contain @");
}
