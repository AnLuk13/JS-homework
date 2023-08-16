//Create an array that describes a shop receipt. Each element of the array consists
//of the name of the product, an amount bought, and price per item. Write the following functions.
//- Print the receipt out on the screen.
//- Counting the sum of the purchase.
//- Extracting the most expensive item on the receipt.
//- Counting an average item price on the receipt.

const shopReceipt = [
  {
    name: "Milk",
    amount: 2,
    price: 100,
  },
  {
    name: "Bread",
    amount: 1,
    price: 500,
  },
  {
    name: "Fruits",
    amount: 3,
    price: 300,
  },
  {
    name: "Meat",
    amount: 4,
    price: 400,
  },
  {
    name: "Vegetables",
    amount: 1,
    price: 100,
  },
];

let count = 0;
let maxPrice = 0;
let mediumPrice = 0;

shopReceipt.forEach((el) => {
  console.log(el);
  count = count + el.price * el.amount;
  if (el.price > maxPrice) {
    maxPrice = el.price;
  }
  mediumPrice = mediumPrice + el.price;
});

console.log(`The sum is ${count}`);

console.log(`Max price is ${maxPrice}`);

console.log("The medium price is " + mediumPrice / shopReceipt.length);
