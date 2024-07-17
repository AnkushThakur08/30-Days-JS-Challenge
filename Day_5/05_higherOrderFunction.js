// Task 9 : HOC that will take a function & number...and call that function that many times

const higerOrderFunction = (funct, number) => {
  for (let i = 0; i < number; i++) {
    console.log(funct());
  }
};

const printName = () => {
  return "Ankush Thakur";
};

higerOrderFunction(printName, 5);

const higherOrderFunction = (func1, func2, value) => {
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
};

const addFive = (num) => num + 5;
const multiplyByTwo = (num) => num * 2;

const initialValue = 10;
console.log(higherOrderFunction(addFive, multiplyByTwo, initialValue));
