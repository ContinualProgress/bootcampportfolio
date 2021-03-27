

function evenOrOdd(beginning, end) {

  let counter = beginning;
  let result = {};

  while (counter <= end)
  {
    if ( (counter % 2) == 0 )
      //console.log(counter + ": even");
      result[counter] = "even";
    else
      //console.log(counter + ": odd");
      result[counter] = "odd";
    counter += 1;
  }

  return result;


}// evenOrOdd


console.log(evenOrOdd(1,5) );
