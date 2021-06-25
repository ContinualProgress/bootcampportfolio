import React, { Component } from 'react';
import Bio from "./Bio"
import Resources from "./Resources";
import Videos from "./Videos";

class App extends Component {
 render() {

   
   return (
     <div className="App">
       <Bio />
       <Resources />
       <Videos />
     </div>
   );
 }
}

export default App;
