console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  alert(`Form submitted successfully`);
  // console.log('form submit');
}

function mouseOver(evt) {
  evt.preventDefault();
  alert(`You have a really good eye to have found this!`);
}

let form = document.querySelector("#contact");
form.addEventListener("submit", handleSubmit);

let image = document.querySelector(`#homeImage`);
image.addEventListener("mouseover", mouseOver);
