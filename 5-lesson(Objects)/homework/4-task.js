//Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky.
//All of them should have unique ids, ages and addresses. Show which is the oldest and which is the youngest.

const dogs = [
  {
    id: 1,
    name: "John",
    age: 3,
    address: "Lincoln St",
  },
  {
    id: 2,
    name: "Ivan",
    age: 5,
    address: "Elm St",
  },
  {
    id: 3,
    name: "Teddy",
    age: 2,
    address: "Oak St",
  },
  {
    id: 4,
    name: "Rocco",
    age: 7,
    address: "Pine St",
  },
  {
    id: 5,
    name: "Sparky",
    age: 1,
    address: "Maple St",
  },
];

let oldestDog = dogs[0];
let youngestDog = dogs[0];

dogs.forEach((dog) => {
  if (dog.age > oldestDog.age) {
    oldestDog = dog;
  }

  if (dog.age < youngestDog.age) {
    youngestDog = dog;
  }
});

console.log("Oldest Dog:", oldestDog);
console.log("Youngest Dog:", youngestDog);
