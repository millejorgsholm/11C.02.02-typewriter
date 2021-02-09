"use strict";

window.addEventListener("DOMContentLoaded", cleartheHTML);

//get the text
const getText = document.querySelector(".typewritten").textContent;

//the variable n = 0
let n = 0;

//run clearHTML
function cleartheHTML() {
  console.log("cleartheHTML");

  //this is clearing the HTML
  document.querySelector(".typewritten").textContent = "";

  loop();
}

//run loop
function loop() {
  console.log("loop");

  //Length makes sure that every letter is added
  if (n < getText.length) {
    //Because n = 0, the variable getText starts at n, which is 0 (no letters in the beginning until you click the button)
    document.querySelector(".typewritten").textContent += getText.charAt(n);
    //After clicking the button, it adds a letter one by one
    n++;
    setTimeout(loop, 150);
  }
}
