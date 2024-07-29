// TODO: Task 3: Create a Module that exports mutiple functions named exports.  import and use the functions in another script
const addTwoNumber = (value1, value2) => {
  return value1 + value2;
};

function addTwoSubtract(a, b) {
  return a - b;
}

module.exports = {
  addTwoNumber,
  addTwoSubtract,
};
