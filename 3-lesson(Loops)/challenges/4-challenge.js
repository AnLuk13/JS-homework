//Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10.

let min = 2;
let max = 9;

for (let i = 2; 2 <= i && i <= 9; i++) {
  console.log("The current multiplication is with " + i);
  console.log("1 x " + i + " = " + 1 * i);
  console.log("2 x " + i + " = " + 2 * i);
  console.log("3 x " + i + " = " + 3 * i);
  console.log("4 x " + i + " = " + 4 * i);
  console.log("5 x " + i + " = " + 5 * i);
  console.log("6 x " + i + " = " + 6 * i);
  console.log("7 x " + i + " = " + 7 * i);
  console.log("8 x " + i + " = " + 8 * i);
  console.log("9 x " + i + " = " + 9 * i);
  console.log("10 x " + i + " = " + 10 * i);
}
