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
      div.className = 'book-wrapper';
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

function Book(title, author) {
  this.title = title;
  this.author = author;
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

// single page application

window.onload = function()
{
    const path = window.location.pathname.split("/");

    switch(path[1])
    {
        case "":
        {
            loadPage("List");
            break;
        }
        case "Add new":
        {
            loadPage("Add new");
            break;
        }
        case "contact":
        {
            loadPage("contact");
            break;
        }
        default:
        {
            loadPage("404");
            break;
        }
    }

    document.querySelectorAll(".nav-link").forEach((link) =>
    {
        link.addEventListener("click", function()
        {
            const path = item.getAttribute("value");
            loadPage(path);
            if(path == "list")
            {
                window.history.pushState("", "", "/");
                return;
            }

            window.history.pushState("", "", path);
        });
    });

    function loadPage($path)
    {
        if($path == "") return;

        const container = document.getElementById("app");

        const request = new XMLHttpRequest();
        request.open("GET", "pages/" + $path + ".html");
        request.send();
        request.onload = function()
        {
            if(request.status == 200)
            {
                container.innerHTML = request.responseText;
                document.title = $path;
            }
        }
    }
}