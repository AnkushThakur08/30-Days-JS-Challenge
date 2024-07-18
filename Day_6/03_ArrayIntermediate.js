const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TASK 7: using map to iterate each number & doubled them
const res = arr.map((item) => item * 2);
console.log(res);

// TASK 8: Use Filter
const filteredArray = arr.filter((item) => item % 2 === 0);
console.log(filteredArray);

// Task 9: Reduce method to calculate the sum of an array
const sum = arr.reduce((acc, curr) => {
  return (curr = acc + curr);
}, 0);

console.log(sum);
