



function calculate_blood_alcohol(A, W, gender, H) {

  //A:  Total alcohol consumed, in ounces (oz)
  //W:  Body weight, in pounds (lbs)
  //r:  The alcohol distribution ratio, 0.73 for man, and 0.66 for women
  //H:  Time passed since drinking, in hours

  if (gender === "male")
    r = alcohol_distribution_male;

  else
    r = alcohol_distribution_female;

  return (A * 5.14 / W * r) - 0.015 * H;

}


let alcohol_consumed_ounces = 2;
let body_weight_pounds = 180;
const alcohol_distribution_male = 0.73;
const alcohol_distribution_female = 0.66;
let time_passed_hours=0.5;


let BAL = calculate_blood_alcohol(alcohol_consumed_ounces, body_weight_pounds, "male", time_passed_hours);
console.log("Blood/Alcohol Level:  " + BAL); 


BAL = calculate_blood_alcohol(alcohol_consumed_ounces, body_weight_pounds, "female", time_passed_hours);
console.log("Blood/Alcohol Level:  " + BAL); 
