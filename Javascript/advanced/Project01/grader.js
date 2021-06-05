


function grade(a, b){

  let i = 0;
  let score = 0;

  for( i; i < a.length; i++ )
  {

    if( (a[i] === b[i]) && (a[i] !== "") )
      score += 4;
    else if( (a[i] !== b[i]) && (a[i] !== "") )
      score += -1;
    else
      score += 0;
    
  }// end for

  return score;


}// end grade


let individualQuiz = ["A", "B", "B", "D", "C"];
let answerKey = ["C", "D", "B", "D", "C"];



score = grade(individualQuiz, answerKey);

console.log( "Quiz:  " + individualQuiz);
console.log( "Answer Key:  " + answerKey);
console.log( "Score:  " + score);
