import React, {Component} from 'react';


class Room extends Component {




    render()
    {


 
       
            return(<div>
                             <div>{this.props.room.location}</div>
                             <div>{this.props.room.width}</div> 
                             <div>{this.props.room.length}</div>        
                            </div>);
           
  }
}

// Exporting the component
export default Room;