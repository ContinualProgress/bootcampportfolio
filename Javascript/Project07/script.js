



function Validation() {

  var eValue = document.getElementById("emailValue").value;
  var pValue = document.getElementById("passwordValue").value;

  if( (eValue === "") || (pValue === "") )
  {

    alert("The fields cannot be blank.");
    return false;

  }
  

  return true;

}
