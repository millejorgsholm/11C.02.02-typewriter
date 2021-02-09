"use strict";

let text = document.querySelector(".typewritten").textContent;

function init() {
  console.log("init");

  //get the text from somewhere

  console.log(text);

  //clear the HTML area
  document.querySelector(".typewritten").textContent = null;

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
