const myLibrary = [];
const display = document.querySelector('.library');
const bookform = document.querySelector('.book-form');
function Book(name, author, pages, isReaded) { // book constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isReaded = isReaded;
}

function addBookToLibrary(e) { 
    e.preventDefault();//prevents the page from reseting after submiting form
    const title = document.getElementById('title').value; //gets all values from form
    const author = document.getElementById('Author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('isReaded').checked;
    const book = new Book(title, author, pages, read); //uses values to created new book
    myLibrary.push(book);//push book into array
    displayLibrary(myLibrary);// call display function to display array of books
    bookform.reset();//clears form after submit
}
function displayLibrary(library) {
    display.innerHTML = '';//resets the display grid
    library.forEach(book => { //creates a new book display for each book
        createBook(book);
    });
}

function createBook(book) {
    let bookCard = document.createElement('div'); 
    bookCard.setAttribute('class', 'bookCard');
    bookCard.innerHTML = `<p>Title:${book.name}</p>
                          <p>Author:${book.author}</p>
                          <p>Pages:${book.pages}</p>`;
    display.appendChild(item);
}
addEventListener('submit', addBookToLibrary);


