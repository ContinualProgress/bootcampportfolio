import React, { Component } from 'react';
import arbuckle01 from './arbuckle01.jpg';


class Arbuckle01 extends Component {

  render() {

    const imageBorder = {

      border: '2px solid blue',

    }
  
    return(
      <div>
	<h1>About Jon Arbuckle</h1>
	<img src={arbuckle01} alt="arbuckle01" style={imageBorder}/>

	<p>
	  Hi there everyone.  My name is <u>Jon Arbuckle</u>.  I am 30 years old and I am a cartoonist that lives in Munice, Indiana.  I am the proud owner of a cat named <strong>Garfield</strong> and a dog named <strong>Odie</strong>.  Garfield is fat, lazy and loves to eat, while Odie is a dog without a brain.  Although my pets drive me crazy, I can't imagine my life without them.
	</p>

        <p>
          I spend about half of my time going to the grocery store to buy enough food to feed Garfield.  I have to make sure to buy all of Garfield's favorite foods, or else he'll get grumpy.  This includes milk, cheese, bread, ham, chicken wings, potato chips, pasta with marinara sauce, frozen pizzas, and <strong>lots and lots</strong> of lasagna.  When I come home, Garfield usually attacks me and tries to eat everything in the grocery bag before I even have time to put it in the refridgerator.  One time he ate everything that I bought in 30 seconds, and I had to go back to the store to buy more food.  <em>I wasn't too happy about that</em>.
        </p>

        <hr />
      </div>

    )// end return


  }// end render



}// end Arbuckle01


export default Arbuckle01;
