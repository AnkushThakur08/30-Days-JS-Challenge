// TASK 5 - Calculate Sum of Array
let sum = 0;
const calculateSum = (arr) => {
  arr.map((item) => {
    sum = sum + item;
  });
  return sum;
};
console.log(calculateSum([10, 20]));

// Task 6 Check if string contains a specific character
const stringChecker = (str, value) => {
  return str.toLowerCase().includes(value);
};

console.log(stringChecker("Ankush", "a"));
