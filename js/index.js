const bookTitle = document.querySelector('book-title');
const bookAuthor = document.querySelector('book-author');
const bookForm = document.getElementsByTagName('form')[0];
const awosomeBook = document.querySelector('.book-store');
const bookBtn = document.getElementById('add-btn');

// const bookList = [
//   {title: 'Atomic Habits',
//   author: 'James Clear',
// },{
//   title: 'Thinking fast and slow',
//   author: 'Dean burnette',
// },
// ];


// for (let i = 0; i < bookList.length; i++) {
//   const p = document.createElement('p');
//   const p2 = document.createElement('p');
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.classList.add('remove-btn');
//   btn.textContent = 'remove';
//   const data = bookList[i];
//   p.textContent = data.title;
//   awosomeBook.appendChild(p);
//   p2.textContent = data.author;
//   awosomeBook.appendChild(p2);
//   awosomeBook.appendChild(btn);
// }

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  static booksArr = [];

  // create a Book
  create(id = this.id, title = this.title, author = this.author) {
    const bookElement = `
    <div id="${id}" class="book">
        <div class="book-details">
          <p class="book-title">${title}</p>
          <span class="by">&nbsp;by&nbsp;</span>
          <p class="book-author">${author}</p>
        </div>
        <button class="btn remove-btn" type="button">Remove</button>
    </div`;

    awosomeBook.insertAdjacentHTML('beforeend', bookElement);
  }

  // Add a Book
  Add() {
    const newBook = new Book(this.id, this.title, this.author);
    newBook.create();
    Book.booksArr.push(newBook);
  }

  // Clear Fields
  // static clearField() {
  //   bookTitle.value = '';
  //   bookAuthor.value = '';
  // }

}

