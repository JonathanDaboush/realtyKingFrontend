import React, {Component} from 'react';
import $ from 'jquery';
import HighlightValuePair from './realEstateComponents/highlightValueComponent';
import Autocomplete from "./MiscellaneousServices/Autocomplete";
class HighlightMainComponent extends Component {


    render()
    {
     let i="";

        return
              (
                 <highlightValuePair highlightValuePair={this.props.highlightValuePair} i={i}/>
              );
         }
     
     
       
     }
     
     // Exporting the component
     export default HighlightMainComponent;