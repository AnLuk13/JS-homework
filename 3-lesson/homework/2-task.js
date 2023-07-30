//Request two numbers and find only their largest common divisor.

let a = prompt("Enter the first number");
let b = prompt("Enter the second number");

let c = a;
let d = b;

while (d !== 0) {
  let temp = d;
  d = c % d;
  c = temp;
}

alert(`The biggest devisor of ${a} and ${b} is ${c}`);
