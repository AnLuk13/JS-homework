//Ask user for age, if user is below 18, display a warning message that he is underaged, if he is over show him alcohol page

const page = document.getElementById("body");

let age = prompt("What is your age?");
if (age >= 18) {
  console.info("Here is the alcohol page");
} else {
  console.warn("You can not access");
  page.remove();
}
