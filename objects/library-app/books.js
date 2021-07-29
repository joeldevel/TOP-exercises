
//get inputs
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.getElementsByName('read');

const createNewBook = document.querySelector('#create-new-book');
console.log(createNewBook);
// console.log(title.value, author, pages);

/*
for (let i of read) {

if (i.checked) {
    console.log(i);
  }
}
*/
function checkRead(input) {
  for (let i of input) {
    if (i.checked) return i;
  }
}
// console.log(checkRead(read).value);
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

function addBookToLibrary(e) {
  e.preventDefault();
  const book = new Book(title.value, author.value, parseInt(pages.value), true);
  myLibrary.push(book);
  console.log("insertando libro");
  appendBookToTable(book);
}

function displayBooks(books) {
  books.forEach(appendBookToTable);
}

function appendBookToTable(book) {
  let table = document.querySelector('.display-books');
  const row = `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
  </tr>`;
  table.insertAdjacentHTML("beforeend", row);
}
let book1 = new Book('Ivy Gripped the Steps', 'Elizabeth Bowen', 23, true);
let book2 = new Book('A Good Investment', 'Joyce Cary', 14, false);
let book3 = new Book('The Killing Bottle', 'L. P. Hartley', 40, true);
let book4 = new Book('The Scapegoat', 'V. S. Pritchett', 38, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

displayBooks(myLibrary);

createNewBook.addEventListener('click', addBookToLibrary);
// console.log(book1.info());
