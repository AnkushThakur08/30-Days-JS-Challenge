// Task 1: create a module that exports a function to add two numbers.Import and use this module in another script
const addTwoNumber = (value1, value2) => {
  return value1 + value2;
};

// Task 2: create a module that exports an object representing a person wit to add two numbers.Import and use this module in another script
const person = {
  firstName: "Ankush",
  lastName: "Thakur",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

module.exports = { addTwoNumber, person };
