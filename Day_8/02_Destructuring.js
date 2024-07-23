// Task 3: Use Destructure and get 1st and 2nd element in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [a, b] = arr;
console.log(a, b);

// Task 4: use Object Destructure to get the title and book from an object
const book = {
  title: "The PARA SF Operative",
  author: "Swapnil Pandey",
  year: 2015,
};

const { title, author } = book;

console.log(title, author);
