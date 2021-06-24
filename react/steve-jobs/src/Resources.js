import React, { Component } from 'react';
import logo from './logo.svg';
import Bio from "./Bio"
import {the_resources} from "./the_resources";
import Resource from "./Resource";

class App extends Component {
 render() {

   let resourceList = []
   the_resources.map( (element) => resourceList.push(<Resource description={element.description} location={element.location} linktext={element.linktext} />));
   
   return (
     <div className="App">
       <h1>Steve Jobs Resources</h1>
       {resourceList}
     </div>
   );
 }
}

export default App;
