// Task 1: Add a click Event listener and change the text content of the paragraph
const paragraphElement = document.querySelector(".paragraph");
const buttonElement = document.querySelector(".button");

buttonElement.addEventListener("click", () => {
  paragraphElement.innerText = "Hello Everyone!! this is a new Paragraph";
});

// Task 2: DblClick
const imageElement = document.querySelector(".image");
imageElement.addEventListener("dblclick", () => {
  console.log("Image is double clicked");
  imageElement.style.visibility = "hidden";
});

// Task 3 : Mouseover event to change thr BG color
const divElement = document.querySelector(".background");
divElement.addEventListener("mouseover", () => {
  divElement.style.backgroundColor = "lightgreen";
});

// Task 4:MouseOut event to reset the color
divElement.addEventListener("mouseout", () => {
  divElement.style.backgroundColor = "red";
});

// Task 5:Add keydown event listeners to an input field that logs the key pressed to the console
const inputElement = document.querySelector(".inputField");
inputElement.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// Task 6: Add a keyup event listener to an input field that display the current value in a paragraph
const emailElement = document.querySelector(".email");
emailElement.addEventListener("keyup", (e) => {
  console.log(e);
  paragraphElement.innerText = e.target.value;
});

// Task 7: Add a submit event listener to the form that logs the form value
const myform = document.querySelector(".myform");
myform.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(myform);
  console.log(form.get("name"));
  console.log(form.get("email"));
});

// Task 8: Add a change event listener to a select dropdown
const selectElement = document.querySelector(".select");
selectElement.addEventListener("change", (e) => {
  console.log(e.target.value);
  paragraphElement.textContent = e.target.value;
});

// Task 9:

// Task 10:
