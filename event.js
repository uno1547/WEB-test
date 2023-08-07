let button = document.querySelector(".btn")
button.addEventListener("click", (evt) => {
  console.log(evt)
})
button.addEventListener("mouseover", (evt) => {
  console.log(evt)
})
document.addEventListener("keyup", (evt) => {
  console.log(evt)
})