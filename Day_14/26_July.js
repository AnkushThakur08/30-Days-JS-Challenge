// TODO: CLASS DEFINITION
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


// TODO: INHERITANCE
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


// TODO: STATIC METHODS & PROPERTIES
// Task 5: Add a Static Method to the Person Class that returns a generic grettings message. Call this static method without creating an instance of the class and log the message
console.log(Person.greetings());


// Task 6: Add a static property to the Student class to keep the track of the number of student created. Increment this property in the constructor and log the total number of students
const student1 = new Student('Karan', 28, '4352');
const student2 = new Student('Nijjar', 23, '8331');
const student3 = new Student('Hargun', 30, '7065');

const totalStudents = Student.studentCount;
console.log(`The total number of students are ${totalStudents}`); //The total number of students are 5

