// Task 8: use enhanced object literals to create an object with methods & properties
const name = "Ankush Thakur";
const age = 30;

const myInfo = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  incrementAge() {
    this.age += 1;
    console.log(`Happy birthday! I am now ${this.age} years old.`);
  },
};

console.log(myInfo);
myInfo.greet();
myInfo.incrementAge();

// Task 9: create an object with computed property name based on variables
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";
const propName4 = "greet";

const person = {
  [propName1]: "Ankush",
  [propName2]: "Thakur",
  [propName3]: 28,
  [propName4]() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  },
};

// Log the object to the console
console.log(person);

// Call the greet method
person.greet();
