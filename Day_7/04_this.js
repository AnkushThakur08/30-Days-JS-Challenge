// Task 7: use of this keyword
const book = {
  title: "The PARA SF Operative",
  author: "Swapnil Pandey",
  year: 2015,
  bookDetails: function () {
    return `Book Title is ${this.title} and year of publishing is ${this.year}`;
  },
};
