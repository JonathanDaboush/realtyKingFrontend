import React, {Component} from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class ServiceValuePair extends Component {
   



    render()
    {


        
        let name="service"+this.props.i;
        let nameValue="serviceValue"+this.props.i;
     
            return (<div>
                                    <div id={name} className="form-control" name={name}  >service:{this.props.serviceValuePair.service.value}</div>
                                    <div id={nameValue} className="form-control" name={nameValue}  > service Value:{this.props.serviceValuePair.serviceValue.value}</div>
                            </div>);
           
  }
}

// Exporting the component
export default ServiceValuePair;