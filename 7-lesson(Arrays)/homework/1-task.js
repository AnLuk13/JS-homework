//Create a “groceries list” array. Each element of the array is an object that contains the name
//of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array.
//Display the entire list, so that the not yet purchased items go before the bought ones.

const groceriesList = [
  {
    name: "Milk",
    amount: 2,
    bought: true,
  },
  {
    name: "Bread",
    amount: 1,
    bought: false,
  },
  {
    name: "Fruits",
    amount: 3,
    bought: true,
  },
  {
    name: "Meat",
    amount: 4,
    bought: false,
  },
  {
    name: "Vegetables",
    amount: 1,
    bought: true,
  },
];

var falseArray = [];
var trueArray = [];

groceriesList.forEach((el) => {
  if (el.bought == false) {
    falseArray.push(el.name);
  } else {
    trueArray.push(el.name);
  }
});

console.log(falseArray.sort().concat(trueArray.sort()));
