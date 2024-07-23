// Task 5: use Spread Operator to create a new Array that includes all the existing element + new element
const arr = [
  {
    title: "The PARA SF Operative",
    author: "Swapnil Pandey",
    year: 2015,
  },
  {
    title: "The Accidental Prime Minister",
    author: "Yash",
    year: 2020,
  },
  {
    title: "5 AM CLUB",
    author: "Rohit",
    year: 2024,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Ankush",
    year: 2011,
  },
];

const newBook = {
  title: "The Man who knew Infinity",
  author: "Abkar Patel",
  year: 2005,
};

const finalResult = [...arr, newBook];
console.log(finalResult);

// Task 6 : Rest operator to accept arbitary number of arguments, sum them & return the result
const sum = (...args) => {
  const res = args.reduce((acc, curr) => {
    return acc + curr;
  });

  return res;
};

console.log(sum(1, 2, 3, 4, 5));
