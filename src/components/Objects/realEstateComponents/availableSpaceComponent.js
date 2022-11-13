import React, {Component} from 'react';


class AvailableSpace extends Component {




    render()
    {


       
    
       
            return(<div>
                <div>{this.props.availableSpace.spaceType}</div>
                <div> {this.props.availableSpace.floor}</div>
                <div>{this.props.availableSpace.leaseRate}</div>
                <div> {this.props.availableSpace.divisibleSpace}</div>
                <div>{this.props.availableSpace.totalSpaceAvailable}</div>
                <div>{this.props.availableSpace.dateOfAvailability}</div>
                <div> {this.props.availableSpace.leaseType}</div>
                <div>{this.props.availableSpace.officeNumber}</div>
                <div> {this.props.availableSpace.title}</div>
             </div>);
           
  }
}

// Exporting the component
export default AvailableSpace;