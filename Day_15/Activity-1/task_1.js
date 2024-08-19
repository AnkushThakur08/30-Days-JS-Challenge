// Write  a function that returns another function, where the inner function accesses a variable from the outer function scope. Call the inner function and log the result

const getName = () => {
    const myName = "Ankush Thakur"

    const printName = () => {
        console.log(myName)
    }

    printName()
}

getName()