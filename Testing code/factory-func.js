//Factory function

function createFunc(height, width) {
  return {
    height: height,
    width: width,
    calcArea: function () {
      return this.height * this.width;
    },
  };
}

const rect1 = createFunc(20, 20);
console.log(rect1.calcArea());
