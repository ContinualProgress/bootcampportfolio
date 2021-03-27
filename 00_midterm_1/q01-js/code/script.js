// get reference to the first input element
//var firstNum = document.getElementById("first")
//var firstNum = document.getElementById("first").value

// get reference to the second input element
//var secondNum = document.getElementById("second")
//var secondNum = document.getElementById("second").value

// get reference to the submit input element which
// looks like a button
var btn = document.querySelector("input[type='submit']")

// get reference to the area where you will place the
// answer to the calculation
var msg = document.querySelector("#message")


// attach a handler function to the button which
// calculates the result of multiplication and 
// displays the result

btn.onclick = function(){
   var firstNum = document.getElementById("first").value
   var secondNum = document.getElementById("second").value

   console.log("The value of firstNum is:  " + firstNum);
   console.log("The value of secondNum is:  " + secondNum);

   let answer = myCalc(firstNum, secondNum);
   console.log("The answer is:  " + answer);

   //msg.innerText = `The answer is ${answer || ''}`
   msg.innerHTML = `The answer is ${answer || ''}`;
}

// perform the calculation ... here it multiplies the
// two inputs into the function.  Having a separate function
// allows the developer to change the calculation without
// requiring to change other code.

const myCalc = function(a, b) {

   console.log("The value of a is:  " + a);
   console.log("The value of b is:  " + b);
   console.log("The result of multiplying:" + a*b);

   return Number(a)*Number(b);
} 
