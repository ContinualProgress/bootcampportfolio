import React, { Component } from 'react';

class Video extends Component {
 render() {
   return (
     <div>
       <h3>
         {this.props.description}
       </h3>
       <p>
         <iframe width="420" height="315"
	 src={this.props.location}>
	 </iframe>
       </p>
     </div>
   );
 }
}

export default Video;
