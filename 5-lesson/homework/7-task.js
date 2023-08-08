//Create an object circle with a property radius and a method calculateArea.
//The calculateArea method should calculate and return the area of the circle
//using the formula: area = π * radius^2. Now, create another object smallCircle
//with its own radius, and use the bind method to bind the calculateArea method from
//circle to smallCircle. Call the calculateArea method on smallCircle and print the area.

const circle = {
  radius: 4,
  pi: 3.14,

  calculateArea() {
    return "area = " + this.pi * this.radius ** 2;
  },
};

const smallCircle = {
  radius: 2,
  pi: 3.14,
};

console.log(circle.calculateArea());
const bound = circle.calculateArea.bind(smallCircle);
console.log("The small circle", bound());
