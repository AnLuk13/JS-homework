//Create 2 people - Joye and Rachel. They have to have age and a greeting
//which will say “Hi, my name is  <NAME> and I am <AGE> old. Nice to meet you!”

const people = [
  {
    name: "Joye",
    age: 20,
  },
  {
    name: "Rachel",
    age: 22,
  },
];

people.forEach((people) => {
  console.log(
    `Hi, my name is ${people.name} and I am ${people.age} old. Nice to meet you!`
  );
});
