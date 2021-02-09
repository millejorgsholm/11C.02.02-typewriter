"use strict";

const text = document.querySelector(".typewritten").textContent;
const lastLetter;

function init() {
  console.log("init");

  //get the text from somewhere

  //clear the HTML area

  //start loop

  loop();
}

function loop() {
  console.log("loop");
  //show the N'th letter
  // - set textContent to substring of 0 to N
  //increment N

  //wait before calling loop() again
  if (something) {
    setTimeout(loop, 500);
  }
}
