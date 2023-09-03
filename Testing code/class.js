//Class

class MathUtils {
  static pi = 3.14;

  static calcArea(a, b) {
    return a * b;
  }

  calcCirce(r) {
    return r * r * pi;
  }
}

console.log(MathUtils.pi);
// console.log(MathUtils.calcCirce(5)); it isnt static so we cant access directly, its in prototype
console.log(MathUtils.calcArea(4, 5));

//we cant access directly MathUtils.calcCirce because it can be accessed only from instance
//static is attached to class not to instance!

class Rect {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  //It is in prototype
  calcArea() {
    return MathUtils.calcArea(this.height, this.width);
    // return this.height * this.width;
  }
}

const rect = new Rect(20, 20);
console.log(rect);
console.log(rect.calcArea());
console.log(rect.calcArea.call(rect)); 
