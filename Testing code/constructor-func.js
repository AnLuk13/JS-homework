//Constructor function

function Rect(height, width) {
  this.height = height;
  this.width = width;
  // this.calcArea = function () {
  //   return this.height * this.width;
  // };
}

//creating a function in prototype
Rect.prototype.calcArea = function () {
  return this.height * this.width;
};

//not located in function or prototype, its static
Rect.calcCircumference = function (a, b) {
  return 2 * (a + b);
};

//instance
const rect = new Rect(20, 20);
console.log(rect);
console.log(rect.calcArea());
console.log(Rect.calcCircumference(2, 1));
