//Create an object with properties. These properties cannot be changed

const me = {
  name: "Antonio",
  age: 20,
  studying: "Javascript",
};

console.log(me);
Object.freeze(me);

me.age = 21; // we cant change
console.log(me);

delete me.name; // we cant delete
console.log(me);
