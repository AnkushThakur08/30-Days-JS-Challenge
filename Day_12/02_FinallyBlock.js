// Task 3: Write a script that includes a try-catch block and a finally block. Log the message in the try catch and finally block to observe the execution flow

const divideTwoNumber = (value1, value2) => {
  if (value1 % value2 === 0) {
    console.log("SUCCESS");
  } else {
    throw new Error("It is an Error");
  }
};

const checkNumber = () => {
  try {
    console.log("We are in Try Block");
    // divideTwoNumber(10, 5);
    divideTwoNumber(10, 6);
  } catch (error) {
    console.log("We are in Error block");
    console.log(error.message);
  } finally {
    console.log("We are in Finally block");
  }
};

checkNumber();
