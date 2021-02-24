
let myName = prompt("Tell me your name.");
let num1st = prompt("Give me a number.");
let num2nd = prompt("Give me another number.");

function getName(name) {

  result = `You're going to have a wonderful day, ${name}.`;
  return result;

}


function getSum( first, second ) {

  result = `By the way, the sum of your numbers is ${Number(first) + Number(second)}.`;
  return result;

}



