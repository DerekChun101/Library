const myLibrary = [];
const display = document.querySelector('.library');
const bookform = document.querySelector('.book-form');
function Book(name, author, pages, isRead) { // book constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.switchRead = function() {

}
function addBookToLibrary(e) { 
    e.preventDefault();//prevents the page from reseting after submiting form
    const title = document.getElementById('title').value; //gets all values from form
    const author = document.getElementById('Author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('isRead').checked;
    const book = new Book(title, author, pages, read); //uses values to created new book
    myLibrary.push(book);//push book into array
    displayLibrary(myLibrary);// call display function to display array of books
    console.log(myLibrary);
    bookform.reset();//clears form after submit
}
function displayLibrary(library) {
    display.innerHTML = '';//resets the display grid
    library.forEach(book => { //creates a new book display for each book
        createBook(book);
    });
}
function removeBook() {

}

function createBook(book) {
    let bookCard = document.createElement('div'); 
    let btnContainer = document.createElement('div');
    bookCard.setAttribute('class', 'bookCard');
    btnContainer.setAttribute('class', 'btnContainer');
    let read = document.createElement('button');
    read.setAttribute('class', 'readBtn');
    // read.addEventListener('click', () => {
    //     if(book.isRead === true) {
    //         book.isRead === false;
    //         read.classList.remove('read');
    //         read.classList.add('notRead');
    //         read.textContent = 'Not Read';
    //     } else {
    //         book.isRead === true;
    //         read.classList.remove('notRead');
    //         read.classList.add('read');
    //         read.textContent = 'Read';
    //     }
    // });
    if(book.isRead === true) {
        read.classList.add('read');
        read.textContent = 'Read';
    } else {
        read.classList.add('notRead')
        read.textContent = 'Not Read'
    }
    bookCard.innerHTML = `<div class = 'book-info'>
                         <p>Title:${book.name}</p>
                          <p>Author:${book.author}</p>
                          <p>Pages:${book.pages}</p></div>`;
    bookCard.appendChild(btnContainer);
    btnContainer.appendChild(read);
    display.appendChild(bookCard);
}

addEventListener('submit', addBookToLibrary);


