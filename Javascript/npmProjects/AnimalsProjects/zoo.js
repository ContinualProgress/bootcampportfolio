var animals = require('animals');
var Log = require('log.pets');


//Get a random animals name to appear in the console using the “animals” package.
console.log(animals() );
console.log(animals() );
console.log(animals() );

//Get a lion ascii art to appear using the “Log.pets” package.
Log.dinosaur();
Log.lion();

//Can you use them both together so that the animal names from the “animals” package appear on the zoo sign from the Log.zoo method in the “Log.pets” package.
Log.zoo(animals(), animals(), animals() );

//Display the number of animals available for the generator
console.log("Number of animals..." + animals.words.length );

//Determining the number of animals starting with the letter 'G' and displaying those elements.
var letter_G = (elem) => elem.substr(0,1) === "G".toLowerCase();
var animalsBeginningWithG = animals.words.filter(letter_G);
console.log("Number of animals that start with the letter G:  " + animalsBeginningWithG.length);
(animalsBeginningWithG)? console.log(animalsBeginningWithG) : console.log("There are no such entries...");
