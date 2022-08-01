const bookTitle = document.querySelector('book-title');
const bookAuthor = document.querySelector('book-author');
const bookForm = document.getElementsByTagName('form')[0];
const awosomeBook = document.querySelector('.book-store');
const bookBtn = document.getElementById('add-btn');

const bookList = [
  {title: 'Atomic Habits',
  author: 'James Clear',
},{
  title: 'Thinking fast and slow',
  author: 'Dean burnette',
},
];


for (let i = 0; i < bookList.length; i++) {
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('remove-btn');
  btn.textContent = 'remove';
  const data = bookList[i];
  p.textContent = data.title;
  awosomeBook.appendChild(p);
  p2.textContent = data.author;
  awosomeBook.appendChild(p2);
  awosomeBook.appendChild(btn);
}