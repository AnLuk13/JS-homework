//Request names and ages for two children. Check if child 1 is older and if its name is Tim

let nameOne = prompt("Child one name");
let ageOne = parseInt(prompt("Child one age"));
let nameTwo = prompt("Child two name");
let ageTwo = parseInt(prompt("Child two age"));

if (nameOne == "Tim" && ageOne > ageTwo) {
  alert("Child one is older and his name is Tim");
}
