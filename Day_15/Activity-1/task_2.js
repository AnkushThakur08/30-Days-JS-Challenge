//  Create a closure that maintains a private variable counter. Implement functions to increment and get the current value of the counter
const getCounterValue = () => {
    let counter = 0

       return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}

const myCounter = getCounterValue();

myCounter.increment();
console.log(myCounter.getValue()); // Output: 1

myCounter.increment();
console.log(myCounter.getValue()); // Output: 2