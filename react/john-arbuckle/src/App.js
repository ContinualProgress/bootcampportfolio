import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arbuckle01 from './Arbuckle01';
import Arbuckle02 from './Arbuckle02';
import Arbuckle03 from './Arbuckle03';

class App extends Component {
 render() {
   return (
     <div className="App">
       <Arbuckle01 />
       <Arbuckle02 />
       <Arbuckle03 />
     </div>
   );
 }
}

export default App;
