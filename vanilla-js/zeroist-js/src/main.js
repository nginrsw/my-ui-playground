// src/main.js

const app = document.getElementById("app")

app.innerHTML = `
  <h1>Konter</h1>
  <button id="decrease">-</button>
  <span id="count">0</span>
  <button id="increase">+</button>
`

let count = 0
const countDisplay = document.getElementById("count")
const incBtn = document.getElementById("increase")
const decBtn = document.getElementById("decrease")

incBtn.addEventListener("click", () => {
  count++
  countDisplay.textContent = count
})

decBtn.addEventListener("click", () => {
  // ini maksudnya jika count lebih besar dari 0, maka si count bisa ngurangin
  if (count > 0){
    count--
    countDisplay.textContent = count
  }
})
