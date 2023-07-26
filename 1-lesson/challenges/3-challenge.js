//A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy,
//and how much change will he/she have left.
let money = prompt("How much money do you have?");
let price = prompt("How much does a chocolate costs?");
let quantity = parseInt(money / price);
let remaining = money - price * quantity;
console.log("You can buy = " + quantity);
console.log("Your change = " + remaining);
