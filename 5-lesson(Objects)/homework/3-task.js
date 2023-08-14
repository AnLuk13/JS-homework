// Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:
//-A method for displaying the time.
//-A method for changing the time by a given amount of seconds.
//-A method for changing the time by a given amount of minutes.
//-A method for changing the time by a given amount of hours.
//Note that in the last three methods changing one part may influence another.
//For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

const time = {
  hours: 20,
  minutes: 30,
  seconds: 50,

  displayTime() {
    const formattedHours = this.hours.toString().padStart(2, "0");
    const formattedMinutes = this.minutes.toString().padStart(2, "0");
    const formattedSeconds = this.seconds.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  },

  changeTimeBySeconds(seconds) {
    this.seconds += seconds;
    time.normalizeTime.call(this);
  },

  changeTimeByMinutes(minutes) {
    this.minutes += minutes;
    time.normalizeTime.call(this);
  },

  changeTimeByHours(hours) {
    this.hours += hours;
    time.normalizeTime.call(this);
  },

  normalizeTime() {
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds %= 60;

    this.hours += Math.floor(this.minutes / 60);
    this.minutes %= 60;

    this.hours %= 24;
  },
};

console.log("Current Time:", time.displayTime());

time.changeTimeBySeconds(30);
console.log("Time after adding 30 seconds:", time.displayTime());

time.changeTimeByMinutes(30);
console.log("Time after adding 30 minutes:", time.displayTime());

time.changeTimeByHours(2);
console.log("Time after adding 2 hours:", time.displayTime());
