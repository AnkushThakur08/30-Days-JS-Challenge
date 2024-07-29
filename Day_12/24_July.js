/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
*/

// Task 1: write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message in the console

const ThrowError = () => {
  throw new Error("This is an intentional error");
};

const handleError = () => {
  try {
    ThrowError();
  } catch (error) {
    console.log(error.message);
  }
};
handleError();

// Task 2: Create a function that divides 2 number and throws an error if the denominator is zero. Use a try-catch block to handle this error

const divideTwoNumbers = (value1, value2) => {
  if (value1 % value2 === 0) {
    throw new Error("It is an Error");
  } else {
    console.log("Denominator is not zero");
  }
};

const checkNumber = () => {
  try {
    divideTwoNumbers(10, 5);
  } catch (error) {
    console.log(error.message);
  }
};

checkNumber();
