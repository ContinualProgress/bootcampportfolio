import React, { Component } from 'react';


class Arbuckle02 extends Component {

  render() {

  const favorite_foods = ["Pepperoni pizza", "Spaghetti with meatballs", "Jumbo shrimp", "Lobster with filet mignon"]


  return (
 
   <div>
     <h1>Garfield's Favorite Foods</h1> 
     <ul>
       {favorite_foods.map(food => <li>{food}</li>)} 
     </ul> 
   </div> 


  )


  }// end render


}// end Arbuckle02


export default Arbuckle02
