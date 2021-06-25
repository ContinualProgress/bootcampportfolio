import React, { Component } from 'react';
import {links} from "./links";
import Video from "./Video";

class Videos extends Component {
 render() {

   let videosList = []
   links.map( (element) => videosList.push(<Video description={element.description} location={element.location} />));
   
   return (
     <div className="Videos">
       <h1>Check out these Steve Job's Videos</h1>
       {videosList}
     </div>
   );
 }
}

export default Videos;
