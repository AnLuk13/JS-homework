//Create a class hierarchy representing products in an online shop.
//Use inheritance to create a base class Product and derived classes like Book,
//Electronics, and Clothing. Each class should have appropriate properties
//and methods. Should have name and price and specific Add properties and
//methods specific to each type of product.Implement a method to apply a
//discount to the price for each type.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }

  discount() {
    return (
      `The price for ${this.name} by ${this.author} after discount: ` +
      this.price * 0.6
    );
  }
}

class Electronics extends Product {
  constructor(name, price, model) {
    super(name, price);
    this.model = model;
  }

  discount() {
    return (
      `The price for ${this.name} ${this.model} after discount: ` +
      this.price * 0.7
    );
  }
}

class Clothing extends Product {
  constructor(name, price, seazon) {
    super(name, price);
    this.seazon = seazon;
  }

  discount() {
    return (
      `The price for ${this.name} for ${this.seazon} seazon after discount: ` +
      this.price * 0.95
    );
  }
}

const book = new Book("Alice", 300, "Lewis Caroll");
console.log(book.discount());

const electronics = new Electronics("phone", 300, "iphone 14 pro");
console.log(electronics.discount());

const clothing = new Clothing("coat", 300, "winter");
console.log(clothing.discount());
