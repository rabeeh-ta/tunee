window.addEventListener("load", () => { // when the page loads the code runs
  const sounds = document.querySelectorAll(".sound"); // all the .sounds
  const pads = document.querySelectorAll(".pads div"); // all the divs inside .pads


  // this is the part where the sounds play
  pads.forEach(( pad, index) => { //returns the pad and the index of the sound 
    pad.addEventListener("click", function(){
      sounds[index].currentTime = 0; // resetting the time so the audio can be played before ending it self
      sounds[index].play(); // when clicked the function is done
    });
  });
});