
let mySum = new Array();
let count = 0;
let result = 0;

mySum.push( prompt("Give a number.") );
mySum.push( prompt("Give another number.") );
mySum.push( prompt("Give a number again.") );

for(count; count < mySum.length; count++) {

  console.log(mySum[count] );
  result += Number(mySum[count] ); 

}

console.log(result );
finalResult = `The sum of all your numbers is ${result}.`
