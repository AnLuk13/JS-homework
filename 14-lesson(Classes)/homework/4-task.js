//Create a constructor function named Book that takes title, author,
//and pages as parameters and creates book objects.
//Implement a method called read that logs a message indicating the book has been read.

function Book() {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.read = function () {
  return `The book ${this.title} written by ${this.author} with ${pages} has been read`;
};

const title = prompt("Book title:");
const author = prompt("Book author:");
const pages = parseInt(prompt("Book pages:"));

const book = new Book(title, author, pages);
console.log(book.read());
