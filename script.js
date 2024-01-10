const myLibrary = [];

const display = document.querySelector('.library');
const bookform = document.querySelector('.book-form');

class Book {
    constructor(name, author, pages, isRead) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {


    addBookToLibrary = (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value; //gets all values from form
        const author = document.getElementById('Author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('isRead').checked;
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
        this.displayLibrary(myLibrary);
        console.log(myLibrary);
        bookform.reset();//clears form after submit

        
    };
  
    displayLibrary = (library) => {
        let i = 0;
        display.innerHTML = '';//resets the display grid
        library.forEach(book => { //creates a new book display for each book
        this.createBookCard(book, i);
        i++;
        });
    };

    createBookCard = (book, id) => {
        let bookCard = document.createElement('div'); 
        let bookInfo = document.createElement('div');
        let removeBtnCtn = document.createElement('div');
        let btnContainer = document.createElement('div');
        let top = document.createElement('div');
        bookCard.setAttribute('class', 'bookCard');
        bookInfo.setAttribute('class', 'book-info');
        btnContainer.setAttribute('class', 'btnContainer');
        removeBtnCtn.setAttribute('class', 'removeBtnCtn');
        let remove = document.createElement('button');
        remove.setAttribute('class', 'rmBtn');
        remove.textContent = 'X';
        let read = document.createElement('button');
        read.setAttribute('class', 'readBtn');

        read.addEventListener('click', () => { //Changes isRead status of book and sets the correct css while doing do.
            if(book.isRead === true) {
                book.isRead = false;
                read.classList.remove('read');
                read.classList.add('notRead');
                read.textContent = 'Not Read';
            } else {
                book.isRead = true;
                read.classList.remove('notRead');
                read.classList.add('read');
                read.textContent = 'Read';
            }
        });
        remove.addEventListener('click',() => { //Uses Id of book to delted the right object from array
            display.removeChild(bookCard);
            myLibrary.splice(id, 1);
        });
    
        if(book.isRead === true) { //Sets the intial read css
            read.classList.add('read');
            read.textContent = 'Read';
        } else {
            read.classList.add('notRead')
            read.textContent = 'Not Read'
        }
    
    
        bookInfo.innerHTML = `<p>Title: ${book.name}</p>
                              <p>Author: ${book.author}</p>
                              <p>Pages: ${book.pages}</p>`;
        top.appendChild(removeBtnCtn);
        top.appendChild(bookInfo)
        bookCard.appendChild(top);
        bookCard.appendChild(btnContainer);
        removeBtnCtn.appendChild(remove);
        btnContainer.appendChild(read);
        display.appendChild(bookCard);
    }
}
// function Book(name, author, pages, isRead) { // book constructor
//     this.name = name;
//     this.author = author;
//     this.pages = pages;
//     this.isRead = isRead;
 
// }

// Book.prototype.switchRead = function() {

// }
// function addBookToLibrary(e) { 
//     e.preventDefault();//prevents the page from reseting after submiting form
//     const title = document.getElementById('title').value; //gets all values from form
//     const author = document.getElementById('Author').value;
//     const pages = document.getElementById('pages').value;
//     const read = document.getElementById('isRead').checked;
//     const book = new Book(title, author, pages, read); //uses values to created new book
//     myLibrary.push(book);//push book into array
//     displayLibrary(myLibrary);// call display function to display array of books
//     console.log(myLibrary);
//     bookform.reset();//clears form after submit
// }
// function displayLibrary(library) {
//     let i = 0;
//     display.innerHTML = '';//resets the display grid
//     library.forEach(book => { //creates a new book display for each book
//         createBook(book,i);
//         i++;
//     });

// }

// function createBook(book, id) {
//     let bookCard = document.createElement('div'); 
//     let bookInfo = document.createElement('div');
//     let removeBtnCtn = document.createElement('div');
//     let btnContainer = document.createElement('div');
//     let top = document.createElement('div');
//     bookCard.setAttribute('class', 'bookCard');
//     bookInfo.setAttribute('class', 'book-info');
//     btnContainer.setAttribute('class', 'btnContainer');
//     removeBtnCtn.setAttribute('class', 'removeBtnCtn');
//     let remove = document.createElement('button');
//     remove.setAttribute('class', 'rmBtn');
//     remove.textContent = 'X';
//     let read = document.createElement('button');
//     read.setAttribute('class', 'readBtn');

//     read.addEventListener('click', () => { //Changes isRead status of book and sets the correct css while doing do.
//         if(book.isRead === true) {
//             book.isRead = false;
//             read.classList.remove('read');
//             read.classList.add('notRead');
//             read.textContent = 'Not Read';
//         } else {
//             book.isRead = true;
//             read.classList.remove('notRead');
//             read.classList.add('read');
//             read.textContent = 'Read';
//         }
//     });
//     remove.addEventListener('click',() => { //Uses Id of book to delted the right object from array
//         display.removeChild(bookCard);
//         myLibrary.splice(id, 1);
//     });

//     if(book.isRead === true) { //Sets the intial read css
//         read.classList.add('read');
//         read.textContent = 'Read';
//     } else {
//         read.classList.add('notRead')
//         read.textContent = 'Not Read'
//     }


//     bookInfo.innerHTML = `<p>Title: ${book.name}</p>
//                           <p>Author: ${book.author}</p>
//                           <p>Pages: ${book.pages}</p>`;
//     top.appendChild(removeBtnCtn);
//     top.appendChild(bookInfo)
//     bookCard.appendChild(top);
//     bookCard.appendChild(btnContainer);
//     removeBtnCtn.appendChild(remove);
//     btnContainer.appendChild(read);
//     display.appendChild(bookCard);

    
    
// }
library = new Library;
addEventListener('submit', library.addBookToLibrary);