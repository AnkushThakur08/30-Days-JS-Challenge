// Write a Script to save a string value to localStorage, retrive it and log the retrive value

const myName = "Ankush Thakur"

localStorage.setItem("fullName", myName)

const res = localStorage.getItem('fullName')

console.log(res);
