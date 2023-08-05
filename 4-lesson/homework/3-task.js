//Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

function concatenate(a, b, c) {
  return Number(`${a}${b}${c}`);
}

console.log(concatenate(1, 2, 4));
