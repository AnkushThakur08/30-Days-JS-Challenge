// Task 7: Function which takes 2 parameters and returns the product, second parameter as default value
const calculteProduct = (value1, value2 = 1) => {
  return value1 * value2;
};

console.log(calculteProduct(10));
console.log(calculteProduct(10, 10));
