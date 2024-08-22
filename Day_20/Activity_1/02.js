//  Write a script to save an object to local storage by converting it to a JSON string. Retrive and parse the object, then log it

const myUserObject = {
    firstName : "Ankush",
    lastName: "Thakur",
    city: "Shimla",
    state: "Himachal Pradesh"
}

localStorage.setItem("myUserObject", JSON.stringify(myUserObject))



const res = localStorage.getItem("myUserObject")


console.log("RES", JSON.parse(res));



// IMP: Note
// Parse = convert karta hai JSON String to Object
// Stringify = Convert karta hai object ko to String

