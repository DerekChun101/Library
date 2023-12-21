const myLibrary = [];

function Book(name, author, pages, isReaded) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isReaded = isReaded;
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}
function displayLibrary(library) {
    const display = document.querySelector('.library');
    library.forEach(book => {
       let item = document.createElement('div'); 
       item.innerHTML = book.name + " " + book.author;
       display.appendChild(item);
    });
    
}
const book1 = new Book('hi', 'hello', 12, 'yes');
const book2 = new Book('hey', 'your mama', 100, 'no');
addBookToLibrary(book1);
addBookToLibrary(book2);
displayLibrary(myLibrary);