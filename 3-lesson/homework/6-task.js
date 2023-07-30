//Request favourite fruit from user. If it is Peach, Apple or Banana show message that it is your favourite food,
//if it is Pear or Grapefruit show message that you hate it otherwise show message that you have not tried this fruit

let fruit = prompt("Enter a fruit");
let fruits = ["peach", "apple", "banana"];

if (fruits.includes(fruit)) {
  alert("Its my favourite food!");
} else {
  alert("I havent tried it yet");
}
