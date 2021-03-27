

var paragraphs = document.querySelectorAll("p");
var highlighted = false;

paragraphs.forEach( function(elem) {

  if(!highlighted)
  {
    elem.style.backgroundColor = "#ddd";
    highlighted = !highlighted;
  }
  else
  {
    highlighted = !highlighted;
  } 

});

