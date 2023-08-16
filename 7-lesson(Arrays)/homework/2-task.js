//Adding a purchase to the list. Note that if a product already exists, the amount needs
//to be increased in the existing purchase, not in a new one.
//Purchasing a product. The function accepts the name of a product and marks it as bought.

const productList = [
  {
    name: "Milk",
    amount: 2,
    bought: true,
  },
  {
    name: "Fruits",
    amount: 3,
    bought: true,
  },
  {
    name: "Vegetables",
    amount: 1,
    bought: true,
  },
];

let enterProduct = prompt("Enter a product");

function checkProduct(productList) {
  let productFound = false;

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].name == enterProduct) {
      productFound = true;
      return (productList[i].amount += 1);
    }
  }

  if (!productFound) {
    productList.push({ name: enterProduct, amount: 1, bought: true });
  }
}

checkProduct(productList);
console.log(productList);
