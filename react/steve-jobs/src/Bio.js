import React, { Component } from 'react';
import steve from './steve1.jpg';

class Jobs01 extends Component {
 render() {
   return (
     <div>
       <h1>Welcome to the Ultimate Steve Jobs Fan Site</h1>
       <img src={steve} alt="Steve Jobs" />
       <p>
       Steve Jobs was the co-founder and CEO of Apple Inc.  He is widely considered to be a brilliant businessman, as well as one of the greatest tech visionaries of our time.  
       </p>

       <p>
       The story of his life is nothing short of fastinating.  After dropping out of college, he started Apple with his friend <a href="https://en.wikipedia.org/wiki/Steve_Wozniak">Steve Wozniak</a> in 1976 at the age of 21.  The duo gained wealth and fame a year later for the <a href="https://en.wikipedia.org/wiki/Apple_II">Apple II</a>, one of the first highly successful mass-producted personal computers.  This was followed by the very successful Macintosh in 1984, the first mass-produced with a GUI (graphical user interface).  After being ousted of Apple in 1985, he went on to oversee the creation of two new companies:  NeXT and <a href="https://en.wikipedia.org/wiki/Pixar">Pixar</a>.  With the success of the movie Toy Story, Steve became a billionaire.
       </p>

       <p>
       In 1997, Steve returned to Apple.  Bill Gates and Microsoft dominated the computer industry, and Apple was on the brink of extinction.  Nontheless, <a href="https://en.wikipedia.org/wiki/Reality_distortion_field">Steve was a fantastic salesman</a>, and used his business acumen to slowly bring the company back to profitability.'
       </p>
       <hr />  
     </div>
   );
 }
}

export default Jobs01;
