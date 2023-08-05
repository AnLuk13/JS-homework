//Write a function that accepts hours, minutes, and seconds and returns
//that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

function seconds(hours, minutes, seconds) {
  hours = hours * 60 * 60;
  minutes = minutes * 60;
  seconds = hours + minutes + seconds;

  return `In seconds: ${seconds}`;
}

let validTime = prompt("Enter time (hh mm ss) to calculate in sec");
let [h, m, s] = validTime.split(" ").map(Number);
if (0 < h && h <= 24 && 0 < m && m <= 59 && 0 < s && s <= 59) {
  console.log(seconds(h, m, s));
} else {
  console.log("Time is not valid");
}
