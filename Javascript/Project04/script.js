


let myImages = ['assets/background1.jpg', 'assets/background2.jpg', 'assets/background3.jpg'];

let counter = 0;
let elem = document.querySelector("#background1");

elem.style.background = `url( ${myImages[counter]} )`;
counter++;


function switchImage() {

  if (counter >= myImages.length) {

    counter = 0;
  
  }
 
  elem.style.background = `url( ${myImages[counter]} )`;
  console.log("Background: " + elem.style.background);
  counter++;

}

setInterval( switchImage, 3000);



  

