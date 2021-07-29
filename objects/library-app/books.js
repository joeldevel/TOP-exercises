
//get inputs
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.getElementsByName("read");
console.log(title, author, pages);

/*
for (let i of read) {

if (i.checked) {
    console.log(i);
  }
}
*/

let myLibrary = [];

function Book(title, author, pages, read ) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  let readStatus = this.read ? 'already read' : 'not read yet';
  this.info = function() {
    return `${this.title} by ${this.author}, ${pages} pages, ${readStatus}.`;
  }
}

function addBookToLibrary(book, library) {

}

function displayBooks(books) {

}
let book1 = new Book('Ivy Gripped the Steps', 'Elizabeth Bowen', 23, true);

console.log(book1.info());
