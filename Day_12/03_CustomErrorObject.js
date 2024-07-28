// Task 4: create a custom error class that extends the built-in error class.Thrown an instace of this custom error in a function and handle it using try-catch block
class customError extends Error {
  constructor(message, field) {
    super(message);
    this.name = this.constructor.name;
    this.field = field;
    console.log("this.name", this.name);
    Error.captureStackTrace(this, this.constructor);
  }
}

// Function that throws a validation error
function validateUserInput(input) {
  if (input.trim() === "") {
    throw new customError("Input cannot be empty", "userInput");
  }
  return "Valid input!";
}

try {
  let userInput = "";
  let result = validateUserInput(userInput);
  console.log(result);
} catch (error) {
  if (error instanceof customError) {
    console.error(`ValidationError caught: ${error.message}`);
    console.error(`Invalid field: ${error.field}`);
  } else {
    console.error(`An unexpected error occurred: ${error.message}`);
  }
}
