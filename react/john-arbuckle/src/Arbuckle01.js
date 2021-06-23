import React, { Component } from 'react';
import arbuckle01 from './arbuckle01.jpg';


class Arbuckle01 extends Component {

  render() {
  
    return(
      <div>
	<h1>About Jon Arbuckle</h1>
	<img src={arbuckle01} alt="arbuckle01" />

	<p>
	  Hi there everyone.  My name is <u>Jon Arbuckle</u>.  I am 30 years old and I am a cartoonist that lives in Munice, Indiana.  I am the proud owner of a cat named <strong>Garfield</strong> and a dog named <strong>Odie</strong>.  Garfield is fat, lazy and loves to eat, while Odie is a dog without a brain.  Although my pets drive me crazy, I can't imagine my life without them.
	</p>

        <hr />
      </div>

    )// end return


  }// end render



}// end Arbuckle01


export default Arbuckle01;
