//Create a class hierarchy representing different types of animals in a zoo.
//Use inheritance to create a base class Animal and derived classes
//like Mammal, Bird, and Reptile. Each class should have appropriate
//properties and methods.Should have properties name, species and method
//makeSound(). Override the makeSound() method to log an appropriate sound for each type.

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class Mammal extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  makeSound() {
    return "woof";
  }
}

class Bird extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  makeSound() {
    return "chirp";
  }
}

class Reptile extends Animal {
  constructor(name, species) {
    super(name, species);
  }

  makeSound() {
    return "buzzing";
  }
}

const mammal = new Mammal("Dog", "Gold retriever");
console.log(mammal.makeSound());

const bird = new Bird("Anatidae", "Ducks");
console.log(bird.makeSound());

const reptile = new Reptile("Snake", "Python");
console.log(reptile.makeSound());
