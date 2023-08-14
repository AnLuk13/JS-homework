//Create an object that contains separately the numerator and the denominator of a fraction,
//and the following functions for working with this object:
//-A function for adding two fraction objects.
//-A function for subtracting two fraction objects.
//-A function for multiplying two fraction objects.
//-A function for dividing two fraction objects.
//-A function for simplifying a fraction object.

const fraction = {
  numeratorFirst: parseInt(prompt("Enter the first numerator")),
  denominatorFirst: parseInt(prompt("Enter the first denominator")),
  numeratorSecond: parseInt(prompt("Enter the second numerator")),
  denominatorSecond: parseInt(prompt("Enter the second denominator")),
  add() {
    let numeratorHelper =
      this.numeratorFirst * this.denominatorSecond +
      this.numeratorSecond * this.denominatorFirst;
    let denominatorHelper = this.denominatorFirst * this.denominatorSecond;
    let add = (
      (this.numeratorFirst * this.denominatorSecond +
        this.numeratorSecond * this.denominatorFirst) /
      (this.denominatorFirst * this.denominatorSecond)
    ).toFixed(3);
    return `The sum of ${this.numeratorFirst}/${this.denominatorFirst} and ${this.numeratorSecond}/${this.denominatorSecond} = ${numeratorHelper}/${denominatorHelper} or ${add}`;
  },
  subtract() {
    let numeratorHelper =
      this.numeratorFirst * this.denominatorSecond -
      this.numeratorSecond * this.denominatorFirst;
    let denominatorHelper = this.denominatorFirst * this.denominatorSecond;
    let subtract = (
      (this.numeratorFirst * this.denominatorSecond -
        this.numeratorSecond * this.denominatorFirst) /
      (this.denominatorFirst * this.denominatorSecond)
    ).toFixed(3);
    return `The subtraction of ${this.numeratorFirst}/${this.denominatorFirst} and ${this.numeratorSecond}/${this.denominatorSecond} = ${numeratorHelper}/${denominatorHelper} or ${subtract}`;
  },
  multiply() {
    let numeratorHelper = this.numeratorFirst * this.numeratorSecond;
    let denominatorHelper = this.denominatorFirst * this.denominatorSecond;
    let multiply = (
      (this.numeratorFirst * this.numeratorSecond) /
      (this.denominatorFirst * this.denominatorSecond)
    ).toFixed(3);
    return `The multiplication of ${this.numeratorFirst}/${this.denominatorFirst} and ${this.numeratorSecond}/${this.denominatorSecond} = ${numeratorHelper}/${denominatorHelper} or ${multiply}`;
  },
  devide() {
    let numeratorHelper = (this.numeratorFirst / this.numeratorSecond).toFixed(
      3
    );
    let denominatorHelper = (
      this.denominatorFirst / this.denominatorSecond
    ).toFixed(3);
    let devide = (
      this.numeratorFirst /
      this.numeratorSecond /
      this.denominatorFirst /
      this.denominatorSecond
    ).toFixed(3);
    return `The devison of ${this.numeratorFirst}/${this.denominatorFirst} and ${this.numeratorSecond}/${this.denominatorSecond} = ${numeratorHelper}/${denominatorHelper} or ${devide}`;
  },
  simplify() {
    let n = this.numeratorFirst;
    let d = this.denominatorFirst;
    let n1 = this.numeratorSecond;
    let d1 = this.denominatorSecond;
    while (d !== 0) {
      let temp = d;
      d = n % d;
      n = temp;
    }
    while (d1 !== 0) {
      let temp2 = d1;
      d1 = n1 % d1;
      n1 = temp2;
    }
    let numeratorHelper = this.numeratorFirst / n;
    let denominatorHelper = this.denominatorFirst / n;
    let numeratorHelper2 = this.numeratorSecond / n1;
    let denominatorHelper2 = this.denominatorSecond / n1;
    return `The simplier form for ${this.numeratorFirst}/${this.denominatorFirst} is ${numeratorHelper}/${denominatorHelper},
    and the simplier form for ${this.numeratorSecond}/${this.denominatorSecond} is ${numeratorHelper2}/${denominatorHelper2}`;
  },
};

console.log(fraction.add());
console.log(fraction.subtract());
console.log(fraction.multiply());
console.log(fraction.devide());
console.log(fraction.simplify());
