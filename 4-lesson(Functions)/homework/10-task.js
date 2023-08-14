//Write a function that counts the difference between the dates.
//The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss.
//While solving this problem use the functions from the two previous ones: at first,
//make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

function date(h1, m1, s1, h2, m2, s2) {
  function seconds(hours, minutes, seconds) {
    hours = hours * 60 * 60;
    minutes = minutes * 60;
    seconds = hours + minutes + seconds;

    return seconds;
  }

  function convertTime(seconds) {
    var hours = Math.trunc(seconds / 3600);
    seconds = seconds - hours * 3600;
    var minutes = Math.trunc(seconds / 60);
    seconds = seconds - minutes * 60;

    return `Time is ${hours}:${minutes}:${seconds}`;
  }
  var firstTime = seconds(h1, m1, s1);
  var secondTime = seconds(h2, m2, s2);
  firstTime = firstTime - secondTime;
  return convertTime(firstTime);
}

console.log(date(5, 25, 50, 1, 9, 49));
