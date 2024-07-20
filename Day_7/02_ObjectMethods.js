// Task 3 : Create a Method which return the string and show the book.title and book.author

// Task 4 : Create a Method which takes year and update the original book property

const book = {
  title: "The PARA SF Operative",
  author: "Swapnil Pandey",
  year: 2015,
  bookDetails: function () {
    return `Book Title is ${this.title} and Author is ${this.author}`;
  },
  updateYear: function (updatedYear) {
    this.year = updatedYear;
  },
};

console.log(book.bookDetails());
book.updateYear(2020);

console.log(book);
