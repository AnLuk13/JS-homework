//Create an object with properties. These properties cannot be deleted

const me = {
  name: "Antonio",
  age: 20,
  studying: "Javascript",
};

console.log(me);
Object.seal(me);

me.age = 21; // we can change
console.log(me);

delete me.name; // we cant delete
console.log(me);
