import React, {Component} from 'react';
import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class HighlightValuePair extends Component {
  render()
    {

        let name="highlight"+this.props.i;
        let nameValue="highlightValue"+this.props.i;
       
            return(<div> 
                                    <div id={name} className="form-control" name={name}  >highlight:{this.props.highlightValuePair.highlight.value}</div>
                                    <div id={nameValue} className="form-control" name={nameValue} > highlight Value:{this.props.highlightValuePair.highlightValue.value}</div>
                            </div>);
            }
           
  }


// Exporting the component
export default HighlightValuePair;