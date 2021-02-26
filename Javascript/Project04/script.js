


let myImages = new Array();

myImages.push("var(--background-1)");
myImages.push("var(--background-2)");
myImages.push("var(--background-3)");

let counter = 0;
let elem = document.querySelector("#background1");

function switchImage() {

  //elem = document.getElementById("background1");
  if (counter > myImages.length) {

    counter = 0;
  
  }
 
  elem.style.background = myImages[counter];
  counter++;

  
  setTimeout( switchImage, 3000 );

}


switchImage();




  

