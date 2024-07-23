// Task 1 Select HTML element and change its content
const element = document.getElementById("chaicode");
element.innerText = "Chai aur code with Hitesh Choudhary";

// Task 2 Select HTML element by class and change its background
const element2 = document.querySelector(".paragraph");
element2.style.backgroundColor = "red";

// Task 3 : Create a new div and append it in the body
const element3 = document.createElement("div");
element3.innerText = "Hello This is Ankush Thakur";
document.body.appendChild(element3);

// Task 4 : Create an li element and append it in the existing ul
const element4 = document.createElement("li");
element4.innerText = "This is list Item";
const unorderedList = document.querySelector(".list");
unorderedList.appendChild(element4);

// Task 5: Select and HTML and remove it from the DOM
unorderedList.remove();
