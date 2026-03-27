const { v4: uuid } = require("uuid");

let books = [
  {
    id: uuid(),
    title: "First book",
    author: "Samo Chalupka",
    genre: "Poezia",
    year: "1864",
    summary: "Epicka basen o odvahe a hrdinstve",
  },
  {
    id: uuid(),
    title: "Secound book",
    author: "Samo Chalupka2",
    genre: "Drama",
    year: "1964",
    summary: "Epicka basen o odvahe",
  },
  {
    id: uuid(),
    title: "Third book",
    author: "Samo Chalupka3",
    genre: "Linguistika",
    year: "2064",
    summary: "Epicka basen",
  },
  {
    id: uuid(),
    title: "Forth book",
    author: "Samo Chalupka4",
    genre: "Kucharske recepty",
    year: "2164",
    summary: "Epicka",
  },
  {
    id: uuid(),
    title: "Fifth book",
    author: "Samo Chalupka5",
    genre: "Psychologia",
    year: "1764",
    summary: "",
  }
];

const getAllBooks = () => {
    return books;
};

const getBookById = (id) => {
    return books.find(book => book.id === id);
};

const createBook = ({ title, author, genre, year, summary }) => {
    const newBook = { id: uuid(), title, author, genre, year, summary };
    books.push(newBook);
    return newBook;
};

const updateBook = (id, { title, author, genre, year, summary }) => {
    const book = getBookById(id);
    if (!book) {
        return { success: false, message: "Book was not found!" };
    }
    if (title) book.title = title;
    if (author) book.author = author;
    if (genre) book.genre = genre;
    if (year) book.year = year;
    if (summary) book.summary = summary;
    return { success: true, message: `Book with ID ${book.id} was successfully updated!`};
};

const deleteBook = (id) => {
    const bookIndex = books.findIndex(book => book.id === id);
    if (bookIndex === -1) {
        return { success: false, message: "Book not found!"};
    }
        const [removedBook] = books.splice(bookIndex, 1);
    return { success: true, message: `Book with ID ${removedBook.id} was successfully removed!`};
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };