"use strict"

const buttonGetStarted = document.getElementById("images-parallax-button");

const toggleClick = () => {
  document.getElementById("images-parallax__fog").classList.toggle ("fog-active");
  document.getElementById("images-parallax__bush-one").classList.toggle ("bush-one-active");
  document.getElementById("images-parallax__bush-two").classList.toggle ("bush-two-active");
  document.getElementById("images-parallax-container").classList.toggle ("container-active");
}

document.addEventListener("click" , e=> {
let smoke_is_active = document.getElementById("images-parallax__fog").classList.contains('fog-active');

if (smoke_is_active) {
  e.stopPropagation();
  toggleClick();
}
})



buttonGetStarted.onclick = e=> {
let smoke_no_active = document.getElementById("images-parallax__fog").classList.contains('fog-active');

if (smoke_no_active) {
  return;
}
e.preventDefault();
e.stopPropagation();
toggleClick();
}

