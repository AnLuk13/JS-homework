//Use the previous objects and show a list with their names and ages

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

dogs.forEach((dog) => {
  console.log(dog.name + " is " + dog.age);
});
