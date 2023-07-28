//Request a date (dd:mm:yy) and put out the one that goes after it.
//Pay attention to the start of a new month, new year, and also leap years.

let inputDate = prompt("Enter a date (dd:mm:yy):");
let [day, month, year] = inputDate.split(":").map(Number);

let date = new Date(year, month - 1, day + 1);

alert(`The next date is: ${date.toLocaleDateString("en-GB")}`);
