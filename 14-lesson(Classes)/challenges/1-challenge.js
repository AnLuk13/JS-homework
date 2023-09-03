//Create a shape hierarchy using classes in JavaScript.
//Implement a base class called Shape and two derived classes
//called Circle and Rectangle. Each class should have appropriate constructors
//and methods. Should have methods for getting area and circumference

class MathUtils {
  static pi = 3.14;
}

class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  calcArea() {
    return (
      "The " + this.name + " has the area: " + MathUtils.pi * this.radius ** 2
    );
  }

  calcCircumference() {
    return (
      "The " +
      this.name +
      " has the circumference: " +
      (MathUtils.pi * this.radius * 2).toFixed(2)
    );
  }
}

class Triangle extends Shape {
  constructor(name, a, b, c) {
    super(name);
    this.a = a;
    this.b = b;
    this.c = c;
    this.p = a + b + c;
  }

  calcArea() {
    return (
      "The " +
      this.name +
      " has the area: " +
      Math.sqrt(
        this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)
      ).toFixed(2)
    );
  }
}

const circle = new Circle("circle", 10);
console.log(circle.calcArea());
console.log(circle.calcCircumference());

const triangle = new Triangle("triangle", 4, 5, 6);
console.log(triangle.calcArea());
