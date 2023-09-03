//Create a factory function that generates person objects with the
//following properties: name, age, and job. Also, add a method called
//introduce that logs a message introducing the person.

function personFunc(name, age, job) {
  return {
    name: name,
    age: age,
    job: job,
    message: function () {
      return alert(`Hello, ${name}!`);
    },
  };
}

const name = prompt("Name:");
const age = prompt("Age:");
const job = prompt("Job:");

const person = personFunc(name, age, job);
console.log(person.message());
