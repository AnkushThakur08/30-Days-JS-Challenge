const button = document.querySelector(".btn")

const name = document.querySelector(".name")
const email = document.querySelector(".email")

button.addEventListener("click", (e) => {
    console.log("clicked", e, name, email)
})
