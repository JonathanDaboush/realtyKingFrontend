import React, {Component} from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class AmmenetieValuePair extends Component {




    render()
    {


       
        let name="ammenetie"+this.props.i;
        let nameValue="ammenetieValue"; 
       
            return(<div>
                                    <div id={name} className="form-control" name={name}  >ammenetie:{this.props.ammenetieValuePair.ammenetie.value}</div>
                                    <div id={nameValue} className="form-control" name={nameValue}  > ammenetie Value:{this.props.ammenetieValuePair.ammenetieValue.value}</div>
                            </div>);
           
  }
}

// Exporting the component
export default AmmenetieValuePair;