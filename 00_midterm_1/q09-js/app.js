

//Method 1:  The push method

var myArray = [];
console.log(myArray);

myArray.push(1);
myArray.push(2);

console.log(myArray);


//Method 2:  Reverse, Unshift, Reverse

var myArray2 = [4,5,6];
console.log(myArray2);

myArray2.reverse();
myArray2.unshift(7);
myArray2.reverse();

console.log(myArray2);


//Method 3:  Length

var myArray3 = [7,8,9]
console.log(myArray3);
var length = myArray3.length;
console.log(length);
myArray3[length] = 10;
console.log(myArray3);


//Method 4:  Concat

var myArray4 = [11, 12, 13];
console.log(myArray4);
myArray4 = myArray4.concat(14);
console.log(myArray4);


//QUESTION B


const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

// array = [2, 9]
console.log(array);
