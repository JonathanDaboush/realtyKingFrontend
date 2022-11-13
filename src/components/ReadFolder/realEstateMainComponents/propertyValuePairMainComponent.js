import React, {Component} from 'react';
import $ from 'jquery';
import PropertyValuePair from './realEstateComponents/propertyValueComponent';
import Autocomplete from "./MiscellaneousServices/Autocomplete";
class PropertyMainComponent extends Component {


    render()
    {
     let i="";
        return
              (
                 <propertyValuePair  propertyValuePair={this.props.propertyValuePair} i={i}/>
              );
         }
     
     
       
     }
     
     // Exporting the component
     export default PropertyMainComponent;