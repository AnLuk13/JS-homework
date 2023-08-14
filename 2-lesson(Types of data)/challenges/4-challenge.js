//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.

let circleLength = parseInt(prompt("Enter the circle circumference"));
let diameter = circleLength * Math.PI;

let perimeter = parseInt(prompt("Enter the square perimeter"));
let sideLength = perimeter / 4;

if (diameter <= sideLength) {
  alert("The circle will fit");
} else {
  alert("The circle will not fit");
}
