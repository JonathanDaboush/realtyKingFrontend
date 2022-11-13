import React, {Component} from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class FeatureValuePair extends Component {
    render()
    {


       
        let name="feature"+this.props.i;
        let nameValue="featureValue"+this.props.i;
        
            return(<div>
                                    <div id={name} className="form-control" name={name}  >feature:{this.props.featureValuePair.feature.value}</div>
                                    <div id={nameValue} className="form-control" name={nameValue}  > feature Value:{this.props.featureValuePair.featureValue.value}</div>
                            </div>);
          
        }
  
}

// Exporting the component
export default FeatureValuePair;