myColors = [
'#4FC3F7',
'#29B6F6',
'#03A9F4',
'#039BE5',
'#0288D1',
'#0277BD',
'#01579B',
'#9575CD',
'#7E57C2',
'#673AB7',
'#5E35B1',
'#512DA8',
'#4527A0',
'#311B92',
'#7986CB',
'#5C6BC0',
'#3F51B5',
'#3949AB',
'#303F9F',
'#283593',
'#1A237E',
'#64B5F6',
'#42A5F5',
'#2196F3',
'#1E88E5',
'#1976D2',
'#1565C0',
'#0D47A1'];

let counter = 0;

function displayDate() {

  let elem = document.getElementById("theTime");
  let myBod = document.getElementById("theBody");

  let d = new Date();
  let myMinutes;
  let mySeconds;
  let myHours;
 
  //Format Minutes 
  if (d.getMinutes() < 10)
  {
    myMinutes = "0" + d.getMinutes();
  }
  else
  {
    myMinutes = d.getMinutes();
  }

  //Format Seconds 
  if (d.getSeconds() < 10)
  {
    mySeconds = "0" + d.getSeconds();
  }
  else
  {
    mySeconds = d.getSeconds();
  }

  //Format Hours 
  if (d.getHours() < 10)
  {
    myHours = "0" + d.getHours();
  }
  else
  {
    myHours = d.getHours();
  }


  result = `${myHours}:${myMinutes}:${mySeconds}`;
  console.log(result);


  elem.innerHTML = result;
  if (counter >= myColors.length)
  {
    counter = 0;  
  }
  console.log("Current color: " + myColors[counter]);
  myBod.style.background = myColors[counter];
  counter++;

  return result;

}



setInterval(displayDate, 1000);
