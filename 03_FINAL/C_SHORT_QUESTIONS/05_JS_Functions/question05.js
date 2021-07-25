

function compareTwoStrings(first, sec) {

  let count = 0; 

  if( (typeof first !== "string") || (typeof sec !== "string") )
    return -1;

  else if( (first === "") || (sec === "" ) )
    return Math.max(first.length, sec.length)

  else {

    var difference = Math.abs(first.length - sec.length);
    let smaller = Math.min(first.length, sec.length);

    for(let i =0; i < smaller; i++) {

      if(first[i] !== sec[i])
        count += 1;

    }// end for

  }// end else

  return count + difference;


}// end conpareTwoStrings


let firstString = "I am wrong.";
let secondString = "I am right.";

let firstString2 = "I am wron0.";
let secondString2 = "I am right.";

let firstString3 = "";
let secondString3 = "I am right.";

let firstString4 = null;
let secondString4 = "I am right.";

let firstString5 = "I am right";
let secondString5 = "I am right too, yo!";

console.log("Differences between two strings:  " + compareTwoStrings(firstString, secondString));
console.log("Differences between two strings:  " + compareTwoStrings(firstString2, secondString2));
console.log("Differences between two strings:  " + compareTwoStrings(firstString3, secondString3));
console.log("Differences between two strings:  " + compareTwoStrings(firstString4, secondString4));
console.log("Differences between two strings:  " + compareTwoStrings(firstString5, secondString5));
