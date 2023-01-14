//created book class to track data properties
class Book {
  constructor(title, author, subject, language) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.language = language;
  }
}

let bookArray = bookData;

//connects html form to js
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", addBookToArray);

//addBookToArray will allow books to be added to bookData array
function addBookToArray(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let subject = document.getElementById("subject").value;
  let language = document.getElementById("language").value;
  let newBook = new Book(title, author, subject, language);
  bookArray.push(newBook);
  displayBookArray();
}

//created function to  display bookDataw/ for loop & to allow books to be added
function displayBookArray() {
  let bookList = document.getElementById("book-list");
  bookList.innerText = "";
  for (let i = 0; i < bookArray.length; i++) {
    let book = bookArray[i];
    let bookItem = document.createElement("li");
    bookItem.innerText = `Title: ${book.title}, Author: ${book.author}, Subject: ${book.subject}, Language: ${book.language}`;
    bookList.appendChild(bookItem);
    document.querySelector("#book-form").reset();
  }
}

displayBookArray();
