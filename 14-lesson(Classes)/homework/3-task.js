//Create a constructor function named Animal that takes species,
//name, and sound as parameters and creates animal objects.
//Include a method called makeSound that logs the sound the animal makes.

function Animal() {
  this.name = name;
  this.species = species;
  this.sound = sound;
}

Animal.prototype.makeSound = function () {
  return "Sound: " + this.sound;
};

const name = prompt("Animal name:");
const species = prompt("Animal species:");
const sound = prompt("Animal sound:");

const animal = new Animal(name, species, sound);
console.log(animal.makeSound());
