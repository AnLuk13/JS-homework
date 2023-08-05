//Write a function that accepts the number of seconds, translates it into hours,
//minutes, and seconds, and returns as a hh:mm:ss string.

function convertTime(seconds) {
  var hours = Math.trunc(seconds / 3600);
  seconds = seconds - hours * 3600;
  var minutes = Math.trunc(seconds / 60);
  seconds = seconds - minutes * 60;

  console.log(`Time is ${hours}:${minutes}:${seconds}`);
}

convertTime(3001);
