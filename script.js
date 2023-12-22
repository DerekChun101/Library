const myLibrary = [];
const display = document.querySelector('.library');
const bookform = document.querySelector('.book-form');
function Book(name, author, pages, isReaded) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isReaded = isReaded;
}

function addBookToLibrary(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('Author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('isReaded').checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary(myLibrary);
    bookform.reset();
}
function displayLibrary(library) {
    display.innerHTML = '';
    library.forEach(book => {
        createBook(book);
    });
}

function createBook(book) {
    let item = document.createElement('div'); 
    item.setAttribute('class', 'book');
    item.innerHTML = `<p>Title:${book.name}</p>
                          <p>Author:${book.author}</p>
                          <p>Pages:${book.pages}</p>`;
    display.appendChild(item);
}
addEventListener('submit', addBookToLibrary);


