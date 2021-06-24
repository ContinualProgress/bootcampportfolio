import React, { Component } from 'react';

class Resource extends Component {
 render() {
   return (
     <div>
       <p>
         {this.props.description}
       </p>

       <p>
         <a href={this.props.location}>{this.props.linktext}</a>
       </p>
     </div>
   );
 }
}

export default Resource;
