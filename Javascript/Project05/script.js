
let myImages = [ "assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg" ];
let elem = document.getElementById("images");

let btnNext = document.getElementById("next");
btnNext.onclick = next;

let btnPrevious = document.getElementById("previous");
btnPrevious.onclick = previous;

tracker = 0;

function next() {

  console.log(`Next - Tracker Before Function Call: ${tracker}`);

  if ( tracker === (myImages.length-1) )
  {
    elem.setAttribute( "src", myImages[tracker] );
  }

  else if ( (tracker >= 0) && (tracker < myImages.length) )
  {
    tracker++;
    elem.setAttribute( "src", myImages[tracker] );
  } 


  console.log(`Next - Tracker After Function Call: ${tracker}`); 

}









function previous() {
  
  console.log(`Previous - Tracker Before Function Call: ${tracker}`);

  if (tracker === 0)
  {
    elem.setAttribute( "src", myImages[tracker] );
  }

  else if (tracker > 0)
  {
    tracker--;
    elem.setAttribute( "src", myImages[tracker] );
  } 
  console.log(`Previous - Tracker Function Call: ${tracker}`);
 
}
