

var txtPounds = document.getElementById("pounds");
var txtKilograms = document.getElementById("kilograms");

var txtMiles = document.getElementById("miles");
var txtKilometers = document.getElementById("kilometers");


txtKilograms.addEventListener("keyup", kilosToPounds );
txtPounds.addEventListener("keyup", poundsToKilos );
txtKilometers.addEventListener("keyup", kilometersToMiles );
txtMiles.addEventListener("keyup", milesToKilometers );


function milesToKilometers() {

  var miles = Number(txtMiles.value);
  console.log("Miles:  " + miles);

  result = miles * 1.609344;
  console.log("Result:  " + result);
  txtKilometers.value = result;

}


function kilometersToMiles() {

  var kilometers = Number(txtKilometers.value);
  console.log(kilometers);

  result = kilometers * 0.621371;
  console.log("Result:  " + result);
  txtMiles.value = result;
 
}


function kilosToPounds() {

  var kilos = Number(txtKilograms.value);
  console.log(kilos);

  result = kilos * 2.2046226218;
  console.log("Result:  " + result);
  txtPounds.value = result; 

}


function poundsToKilos() {

  var lbs = Number(txtPounds.value);
  console.log(lbs);

  result = lbs * 0.45359237;
  console.log("Result:  " + result);
  txtKilograms.value = result;
  
}
