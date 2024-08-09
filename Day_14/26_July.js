// TODO: Activity 1 =>  CLASS DEFINITION
// Task 1: Define a class person with properties name & age, and a method to return a gretting message. Create an instance of the class and log the grettings
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Hello everyone my name is: ${this.name} & I am  ${this.age} years old`
    }

    static greetings() {
        return `Grettings from Ankush Thakur`
    }
}
let myinfo = new Person("Ankush Thakur", 25);
console.log(myinfo.displayInfo());

// Task 2 : Add a method to the Person class that updates the age property & log the updated Result
console.log(myinfo.age)
Person.prototype.updateAge = function(updatedAge) {
    this.age = updatedAge;
    return `Hey my updated Age is ${this.age}`

}
myinfo.updateAge(30)
console.log(myinfo.age)


// TODO: ACTIVITY 2 => CLASS INHERITANCE
// Task 3: Define a class student that extends the Person class. Add a property studentID and a method to return the studentID. Create an instance of the student class and log the student ID
class Student extends Person {
    static studentCount = 0;
    constructor (name, age, studentID) {
        console.log("studentID", studentID)
        super(name, age)
        this.studentID = studentID;
        Student.studentCount++;
    }

    getStudentID = function () {
        return `MY student ID is ${this.studentID}`
    }
    displayInfo() {
        return `Hello everyone my name is: ${this.name} & I am  ${this.age} years old & my Student ID is ${this.studentID}`
    }
}
let student = new Student("Ankush", 25, 10001)
console.log(student.getStudentID());

// Task 4: Override the greeting method in the Student class to include the StudentID in the message. Log the overridden gretting message
let user2 = new Student("Thakur", 25, 5001)
console.log(user2.displayInfo());


// TODO: ACTIVITY 3 => STATIC METHODS & PROPERTIES
// Task 5: Add a Static Method to the Person Class that returns a generic grettings message. Call this static method without creating an instance of the class and log the message

console.log(Person.greetings());
// Task 6: Add a static property to the Student class to keep the track of the number of student created. Increment this property in the constructor and log the total number of students
const student1 = new Student('Karan', 28, '4352');
const student2 = new Student('Nijjar', 23, '8331');
const student3 = new Student('Hargun', 30, '7065');

const totalStudents = Student.studentCount;
console.log(`The total number of students are ${totalStudents}`); //The total number of students are 5


// TODO: Activity 4: Getters & Setters
// Task 7: Add a getter method to the Person class to return the fullName.Create an instance & log the fullName using getters 
class Person2 {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getfullName = function() {
        return ` ${this.firstName + " " + this.lastName}`
    }

    setFullName = function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let UserWithFullName = new Person2("Ankush", "Thakur")
console.log(UserWithFullName.getfullName())

// Task 8: Add a setter method to the Person class to update the name properties like firstName & lastName
UserWithFullName.setFullName("Yash", "Matta");
console.log(UserWithFullName.getfullName())


// TODO: Activity 5: Private Fields

// Task 9: Define a class Account with private fields for balance add a method to depost & withdraw money. Ensure that balance can only be updated through these methods

// NOTE: Private fields and methods are inaccessible outside a class

class Account {
    #balance = 100;

    depositMoney= function (addMoney) {
        this.#balance = this.#balance + addMoney
        return this.#balance
    }
    withdrawalMoney= function (withdrawalMoney) {
        this.#balance = this.#balance - withdrawalMoney
        return this.#balance

    }
}

const myBalance = new Account()

console.log(myBalance.depositMoney(20))
console.log(myBalance.depositMoney(40))
console.log(myBalance.withdrawalMoney(100))



