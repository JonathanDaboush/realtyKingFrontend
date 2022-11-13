import React, {Component} from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class PropertyValuePair extends Component {
   



    render()
    {


  
        let name="property"+this.props.i;
        let nameValue="propertyValue"+this.props.i;
       
            return(<div>
                                    <div id={name} className="form-control" name={name}  >property:{this.props.propertyValuePair.property.value}</div>
                                    <div id={nameValue} className="form-control" name={nameValue}  > property Value:{this.props.propertyValuePair.propertyValue.value}</div>
                            </div>);
            }
           
  
}

// Exporting the component
export default PropertyValuePair;