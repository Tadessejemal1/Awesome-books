"max-classes-per-file": [true, 5, "exclude-class-expressions"];
const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const awosomeBook = document.querySelector('.book-store');
const bookBtn = document.getElementById('add-btn');

class Collection {
  constructor(books = []) {
    this.books = books;
  }

  add(data) {
    this.books.push(data);
    this.display(data);
    this.remove();
    this.populateStorage();
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  remove() {
    const removeBtns = document.querySelectorAll('.remove-button');
    removeBtns[removeBtns.length - 1].addEventListener('click', (evt) => {
      this.removeFromColl(evt.target);
      awosomeBook.removeChild(evt.target.parentNode);
    });
  }

  display(data) {
    if (this) {
      const div = document.createElement('div');
      div.className = 'book-wraper';
      div.innerHTML = `<h3>"${data.title}" by</h3>
                    <h3>${data.author}</h3>
                    <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
      awosomeBook.appendChild(div);
    }
  }

  removeFromColl(data) {
    const arr = data.getAttribute('data-value').split('-');
    this.books = this.books.filter(
      (item) => item.title + item.author !== arr[0] + arr[1],
    );
    this.populateStorage();
  }

  populateStorage() {
    localStorage.setItem(
      'bookCollection',
      JSON.stringify({ bookColl: this.books }),
    );
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const coll = new Collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}

bookBtn.addEventListener('click', () => {
  coll.add(new Book(bookTitle.value, bookAuthor.value));
});
