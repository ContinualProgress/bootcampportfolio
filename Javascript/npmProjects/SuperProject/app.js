var marvel = require('marvel-characters');

console.log("Hello.");
console.log("Type of..." + typeof marvel);

//a. Get a random character to show in the terminal.
console.log(marvel());

var heroesAndVillians = marvel.characters;

//b. Display the number of characters in the database
console.log("Number of characters:  " + heroesAndVillians.length);

//c. Display only characters whose names start with "Man" in your terminal, or an error message if does not exist.
var the_test = (elem) => elem.substr(0,3) === "Man";

console.log("The result of running \"some\" on heroesAndVillians:  " + heroesAndVillians.some(the_test));
( heroesAndVillians.some(the_test) )? console.log(heroesAndVillians.filter(the_test) ) : console.log("That state of affairs doesn't seem to exist.");


//d. Display “Iron Man” in your terminal, or an error message if does not exist
var subscript = heroesAndVillians.indexOf("Iron Man");
console.log("Subscript:  " + subscript);
(  subscript !== -1 )? console.log(heroesAndVillians[subscript]) : console.log("The entry is not in the array.");

//e. Display “Batman” in your terminal, or an error message if does not exist
var subscript = heroesAndVillians.indexOf("Batman");
console.log("Subscript:  " + subscript);
(  subscript !== -1 )? console.log(heroesAndVillians[subscript]) : console.log("The entry is not in the array.");
