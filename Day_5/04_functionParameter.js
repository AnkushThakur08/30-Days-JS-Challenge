// Task 7 : Takes two parameter & Return their Product
const calculateProduct = (num1, num2 = 5) => {
  return num1 * num2;
};

console.log(calculateProduct(10));

// Task 8: Takes a Person Name & Age as parameter & return a string
const grettingName = (name, age = 26) => {
  return `My name is ${name} and my age is ${age}`;
};

console.log(grettingName("Ankush Thakur", 25));
