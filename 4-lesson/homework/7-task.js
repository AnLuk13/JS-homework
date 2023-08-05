//Write a function that accepts time (hours, minutes, seconds) and returns
//a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.

function time(hours, minutes, seconds) {
  if (seconds == undefined) {
    seconds = "00";
  }
  return `${hours}:${minutes}:${seconds}`;
}

let validTime = prompt("Enter time hh mm ss");
let [h, m, s] = validTime.split(" ");
if (0 < h && h <= 24 && 0 < m && m <= 59 && 0 < s && s <= 59) {
  console.log(time(h, m, s));
} else {
  console.log("Time is not valid");
}
