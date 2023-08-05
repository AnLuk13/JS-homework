//Write a function that accepts the width and length of a rectangle and calculates its area.
//If there is only one parameter given, it counts as a square.

function area(length, width) {
  if (width === undefined) {
    return length ** 2;
  }

  return width * length;
}

console.log("The area is: " + area(2));
