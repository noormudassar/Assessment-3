// console.log("hello there");

let colorButton = document.querySelector("#color");
let placeButton = document.querySelector("#place");
let ritualButton = document.querySelector("#ritual");

function colorButtonAlert() {
  alert(`Yellow`);
}

function placeButtonAlert() {
  alert(`Italy`);
}

function ritualButtonAlert() {
  alert(`Feeding my cats in the mornings`);
}

colorButton.addEventListener("click", colorButtonAlert);
placeButton.addEventListener("click", placeButtonAlert);
ritualButton.addEventListener("click", ritualButtonAlert);
