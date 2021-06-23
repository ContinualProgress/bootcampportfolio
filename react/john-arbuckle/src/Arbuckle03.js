import React, { Component } from 'react';


class Arbuckle03 extends Component {

  render() {

  const favorite_foods = ["Mondays", "Spiders", "Raisins", "Jon singing in the shower"]


  return (
 
   <div>
     <h1>Things that Garfield Hates</h1> 
     <ul>
       {favorite_foods.map(food => <li>{food}</li>)} 
     </ul> 
   </div> 


  )


  }// end render


}// end Arbuckle03


export default Arbuckle03
