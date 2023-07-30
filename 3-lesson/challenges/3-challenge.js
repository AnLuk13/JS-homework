//Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.

// let day = prompt("Enter the day");
// let response = "ok";

// while (response === "ok") {
//   let nextDay = new Date(day);
//   nextDay.setDate(nextDay.getDate() + 1);
//   alert(`The next day is: ${nextDay.toLocaleDateString()}`);
//   response = prompt("Show next day, agree?");
// }

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = prompt("Enter the day of the week");
let response = "ok";
let dayIndex = daysOfWeek.indexOf(day);

while (response === "ok") {
  if (!!dayIndex) {
    let nextDay = daysOfWeek[++dayIndex];

    alert(`The next day is: ${nextDay}`);
  } else {
    alert("Invalid day name. Please enter a valid day of the week.");
  }

  response = prompt("Show next day, agree?");
}
