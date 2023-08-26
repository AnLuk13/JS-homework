//Create an object that describes a car (manufacturer, model, year of release, average speed) and
//the following methods for working with this object:
//-A method that displays the car info
//-A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

const car = {
  manufacturer: "Mercedes",
  model: "GLK",
  year: "2013",
  averageSpeed: 80,
  carInfo() {
    for (let [key, value] of Object.entries(this)) {
      console.log(`${key} : ${value}`);
    }
  },
  timeFrame(distance) {
    let time = distance / this.averageSpeed;
    let breaks = Math.floor(time / 4);
    let totalTime = breaks + time;
    return "The total time is " + totalTime + " hours";
  },
};

let distance = prompt("Enter the distance");

car.carInfo();
console.log(car.timeFrame(distance));

// const car = {
//   manufacturer: "Mercedes",
//   model: "GLK",
//   year: "2013",
//   averageSpeed: 80,
// };

// function carInfo() {
//   for (let [key, value] of Object.entries(car)) {
//     console.log(`${key} : ${value}`);
//   }
// }

// function timeFrame(distance) {
//   let time = distance / car.averageSpeed;
//   let breaks = Math.floor(time / 4);
//   let totalTime = (breaks + time).toFixed(2);
//   let timeMinutes = time * 60;
//   return (
//     "The total time is " + totalTime + " hours or " + timeMinutes + " minutes."
//   );
// }

// let distance = prompt("Enter the distance");

// carInfo();
// console.log(timeFrame(distance));
