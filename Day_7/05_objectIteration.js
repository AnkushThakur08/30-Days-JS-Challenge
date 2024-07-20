// Task 8 : for forIn loop to log keys and values

const book = {
  title: "The PARA SF Operative",
  author: "Swapnil Pandey",
  year: 2015,
};

for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

// Task 9: use Object.keys() and Object.values() to log the values
console.log(Object.keys(book));
console.log(Object.values(book));
