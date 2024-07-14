//TODO: Activity 1

/* const handleArithmeticOperations = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      return "Invalid operation";
  }
};

console.log(handleArithmeticOperations(10, 5, "+"));
console.log(handleArithmeticOperations(10, 5, "-"));
console.log(handleArithmeticOperations(10, 5, "*"));
console.log(handleArithmeticOperations(10, 5, "/"));
console.log(handleArithmeticOperations(10, 7, "%"));
 */

// TODO: Activity 2

/* const getFinalOutput = (num, operation) => {
  let number = 12;
  return operation === "+" ? (number += num) : operation === "-" ? (number -= num) : "Invalid Operation";
};

console.log(getFinalOutput(10, "+"));
console.log(getFinalOutput(5, "-")); */

// TODO: Activity 3

/* const handleComparisonOperations = (num1, num2, operation) => {

  switch (operation) {
    case ">":
      return num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`;
    case "<":
      return num1 < num2 ? `${num1} is less than ${num2}` : `${num2} is less than ${num1}`;
    case ">=":
      return num1 >= num2 ? `${num1} is greater than or Equal to ${num2}` : `${num2} is greater than ${num1}`;
    case "<=":
      return num1 <= num2 ? `${num1} is less than or Equal to ${num2}` : `${num2} is less than ${num1}`;
    case "===":
      return num1 === num2 ? `Both numbers are equal with there type` : `Numbers are not equals or either there types are different`;
    case "===":
      return num1 == num2 ? `Both numbers are equal` : `Numbers are not equals`;
  }
};

console.log(handleComparisonOperations(10, 5, ">"));
console.log(handleComparisonOperations(10, 5, "<"));
console.log(handleComparisonOperations(10, 5, ">="));
console.log(handleComparisonOperations(10, 5, "<="));
console.log(handleComparisonOperations(5, 5, "==="));
 */

// TODO: Activity 4

/* const handleLogicalOperations = (value1, value2, operation) => {
  switch (operation) {
    case "&&":
      return value1 && value2;
    case "||":
      return value1 || value2;
    case "!=":
      return value1 != value2;
  }
};

console.log(handleLogicalOperations(true, true, "&&"));
console.log(handleLogicalOperations(true, false, "||"));
console.log(handleLogicalOperations(true, true, "!=")); */

// Activity 5
const handleNumberType = (num) => {
  return num > 0 ? "Number is Postive" : "Number is Negitive";
};

console.log(handleNumberType(-10));
