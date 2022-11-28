let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let clearBtn = document.getElementById("clear-btn");
let welcomeEl = document.getElementById("welcome-el");
let username = "Sean";
let greeting = "Welcome back, "

function increment() {
  count++;
  countEl.textContent = count;
  // console.log("Count: " + count);
}
incrementBtn.addEventListener("click", increment);

function save() {
  if (count <= 0) {
    return;
  } else {
    let countStr = " " + count + " + ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
  }
}
saveBtn.addEventListener("click", save);

function clear() {
  countEl.textContent = "0";
  saveEl.textContent = "0";
}
clearBtn.addEventListener("click", clear);
