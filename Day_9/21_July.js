// Task 1 Select HTML element and change its content
const h1Element = document.getElementById("chaicode");
h1Element.innerText = "Chai aur code with Hitesh Choudhary";

// Task 2 Select HTML element by class and change its background
const paragraphElement = document.querySelector(".paragraph");
paragraphElement.style.backgroundColor = "red";

// Task 3 : Create a new div and append it in the body
const divElement = document.createElement("div");
divElement.innerText = "Hello This is Ankush Thakur";
document.body.appendChild(divElement);

// Task 4 : Create an li element and append it in the existing ul
const listElement = document.createElement("li");
listElement.innerText = "This is list Item";
const unorderedList = document.querySelector(".list");
unorderedList.appendChild(listElement);

// Task 5: Select and HTML and remove it from the DOM
const delectedElement = document.querySelector(".deletedDiv");
delectedElement.remove();

// Task 6: Remove the last child
// unorderedList.removeChild(unorderedList.children[0]);
unorderedList.removeChild(unorderedList.lastChild);

// Task 7: change the html tag attributes
const imageElement = document.querySelector(".image");
imageElement.attributes.src.value =
  "https://images.pexels.com/photos/27221171/pexels-photo-27221171/free-photo-of-a-woman-is-preparing-food-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Task 8: Add & remove the class
imageElement.classList.add("red_border");
imageElement.classList.remove("red_border");

// Task 9: Add a click event to a button which changes the text content of the paragraph
const buttonElement = document.querySelector(".button");
buttonElement.addEventListener("click", () => {
  paragraphElement.innerText = "Hello Guys this is Chai aur code";
});

// Task 10: add mouseover event and change the border color
imageElement.addEventListener("mouseover", () => {
  imageElement.style.border = "4px solid red";
});
